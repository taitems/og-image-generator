import React from 'react';
import { FormControl, FormLabel, Box, Select, Text } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo';
import reduceTheme from '../functions/reduceTheme';

const Sidebar = () => {

    const [{ theme }, { setRepo, setTheme }] = useTheme();

    const onThemeChange = id => {
        console.log({ id })
        const newThemeSettings = require(`../templates/${id}/settings.js`);
        setTheme({
            id,
            settings: newThemeSettings,
            userSettings: reduceTheme(newThemeSettings)
        })
    }
    const onThemeOptionChange = (settingKey, settingValue) => {
        const newOptions = Object.assign({}, theme.userSettings, {
            [settingKey]: settingValue
        });
        setTheme({
            userSettings: newOptions
        })
    }

    return <Box p={3} w={200} background="white">
        <FetchUrl callback={async item => {
            const { provider, username, repo } = item;
            if (provider === 'github') {
                const githubRepo = await getGithubRepo(username, repo);
                console.log({ githubRepo });
                setRepo(githubRepo);
            }
            return false;
        }} />

        <FormControl>
            <FormLabel>Theme</FormLabel>
            <Select
                size="sm"
                onChange={e => { onThemeChange(e.target.value) }}
                value={theme.id}>
                {list.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </Select>
        </FormControl>

        <Box mt={4}>

            <Text as="h2">Theme Values</Text>

            {theme.settings.map(s => {
                return <FormControl key={s.id} mb={2}>
                    <FormLabel>{s.title}</FormLabel>
                    {
                        s.type === 'dropdown' && (
                            <Select
                                size="sm"
                                onChange={e => onThemeOptionChange(s.id, e.target.value)}
                                value={theme.userSettings[s.id].value}>
                                {s.options.map(item => (
                                    <option key={item.value} value={item.value}>
                                        {item.text}
                                    </option>
                                ))}
                            </Select>
                        )
                    }
                </FormControl>
            })}

        </Box>

    </Box>
}

export { Sidebar }