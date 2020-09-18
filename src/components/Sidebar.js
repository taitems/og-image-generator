import React from 'react';
// import loadable from '@loadable/component'
import { FormControl, FormLabel, Box, Select, Text } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo';

const Sidebar = () => {

    const [{ theme, themeOptions }, { setTheme, setRepo, setThemeOptions }] = useTheme();


    const themeSettings = require(`../templates/${theme}/settings.js`);

    console.log({ themeSettings })

    // const shapeList = [{
    //     text: "Circle",
    //     value: "circle"
    // }, {
    //     text: "Square",
    //     value: "square"
    // }];

    const onThemeChange = e => {
        setTheme(e.target.value)
    }
    const onThemeOptionChange = (settingKey, settingValue) => {
        console.log(settingKey);
        console.log(settingValue);
        // const newOptions = Object.assign({}, ...themeOptions, {
        //     shape: e.target.value
        // });
        // console.log(newOptions)
        // setThemeOptions(newOptions)
    }

    return <Box p={3} w={200} background="white">
        <FetchUrl callback={async item => {
            // console.log(item);
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
                onChange={onThemeChange}
                value={theme}>
                {list.map(item => (
                    <option key={item.key} value={item.key}>
                        {item.title}
                    </option>
                ))}
            </Select>
        </FormControl>

        <Box mt={4}>
            <Text as="h2">Theme Values</Text>

            {themeSettings.map(setting => {
                return <FormControl key={setting.key}>
                    <FormLabel>{setting.title}</FormLabel>
                    {
                        setting.type === 'dropdown' && (
                            <Select
                                size="sm"
                                onChange={e => onThemeOptionChange(setting.key, e.target.value)}
                                value={themeOptions.shape}>
                                {setting.options.map(item => (
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




        {/* <FormControl>
            <FormLabel>Shape</FormLabel>
            
        </FormControl> */}

    </Box>
}

export { Sidebar }