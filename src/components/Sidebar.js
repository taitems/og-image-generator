import React from 'react';
import { FormControl, FormLabel, Box, Select, Text, useToast, Textarea } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo';
import { flattenSettings } from '../functions/flattenSettings';
import { flattenSettingsRaw } from '../functions/flattenSettingsRaw';
import { Layer } from './Layer';

const Sidebar = () => {

    const [{ repo, theme, selectedLayer }, { setRepo, setTheme, setSelectedLayer }] = useTheme();
    const toast = useToast();

    const onThemeChange = id => {
        const newThemeSettings = require(`../templates/${id}/settings.js`);
        setTheme({
            id,
            settings: newThemeSettings,
            userSettings: flattenSettings(newThemeSettings),
            userSettingsRaw: flattenSettingsRaw(newThemeSettings)
        })
    }

    const MapLayers = (item, level = 0) => {
        return <>
            <Layer
                label={item.label}
                level={level}
                visible={item.visible}
                type={item.type}
                selected={item.id && item.id === selectedLayer}
                onClick={e => {
                    console.log(item.id)
                    setSelectedLayer(item.id);
                }}
            />
            {item.children && item.children.map(c => {
                return MapLayers(c, level + 1)
            })}
        </>
    }

    return (
        <Box
            p={3}
            w={250}
            background="white"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)">

            <Text as="h2" fontWeight="800">Repository</Text>

            <FetchUrl callback={async item => {
                const { provider, username, repo } = item;
                if (provider === 'github') {
                    const githubRepo = await getGithubRepo(username, repo);
                    console.log({ githubRepo });
                    if (githubRepo.message) {
                        toast({
                            title: "An error occurred.",
                            description: `Github responded: ${githubRepo.message}`,
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                            position: "top",
                        })
                    } else {
                        setRepo(githubRepo);
                    }
                }
                return false;
            }} />

            <Textarea value={repo.description} onChange={e => {
                setRepo({ description: e.target.value })
            }}></Textarea>

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

                <Text as="h2" fontWeight="800">Theme Values</Text>

                {theme.settings && theme.settings.map(layer => {
                    return MapLayers(layer);
                })}
            </Box>

        </Box>
    )
}

export { Sidebar }