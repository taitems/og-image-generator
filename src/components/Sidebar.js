import React from 'react';
import { FormControl, FormLabel, Box, Select } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo'

const Sidebar = () => {

    const [{ theme, themeOptions }, { setTheme, setRepo, setThemeOptions }] = useTheme();

    const shapeList = [{
        text: "Circle",
        value: "circle"
    }, {
        text: "Square",
        value: "square"
    }];

    const onThemeChange = e => {
        setTheme(e.target.value)
    }
    const onThemeOptionChange = e => {
        console.log(e.target.value);
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

        <Box>
            <label>Theme Values</label>
        </Box>

        <FormControl>
            <FormLabel>Colour Palette</FormLabel>
            <Select size="sm">
                <option value="default">Default</option>
            </Select>
        </FormControl>


        <FormControl>
            <FormLabel>Shape</FormLabel>
            <Select
                size="sm"
                onChange={onThemeOptionChange}
                value={themeOptions.shape}>
                {shapeList.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </Select>
        </FormControl>

    </Box>
}

export { Sidebar }