import React, { useReducer } from 'react';
import { FormControl, FormLabel, Box, Select, Text } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo';
import reduceTheme from '../functions/reduceTheme';
import { ImagePicker, ColorPicker, Dropdown } from './sidebar/pickers';

const Sidebar = () => {

    const [{ theme }, { setRepo, setTheme }] = useTheme();
    const [colorPickerOpen, setColorPickerOpen] = useReducer(
        (oldState, newState) => ({ ...oldState, ...newState }),
        {}
    )

    const onThemeChange = id => {
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

    return <Box p={3} w={250} background="white">
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

            {theme.settings && theme.settings.map(s => {
                return <FormControl key={s.id} mb={2}>
                    <FormLabel>{s.title}</FormLabel>
                    {{
                        dropdown: <Dropdown onChange={e => onThemeOptionChange(s.id, e.target.value)} value={theme.userSettings[s.id].value} options={s.options} />,
                        color: <ColorPicker id={s.id} value={theme.userSettings[s.id]} color={theme.userSettings[s.id]} updateOpenState={setColorPickerOpen} isOpen={colorPickerOpen[s.id]} onChange={c => {
                            onThemeOptionChange(s.id, c.hex);
                        }} />,
                        image: <ImagePicker onChange={val => onThemeOptionChange(s.id, val)} value={theme.userSettings[s.id]} options={s.options} />
                    }[s.type]
                    }
                </FormControl>
            })}

        </Box>

    </Box>
}

export { Sidebar }