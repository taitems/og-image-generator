import React from 'react';
import { Box, Select, useToast, Textarea } from "@chakra-ui/core";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { FetchUrl } from './FetchUrl';
import { getGithubRepo } from './getGithubRepo';
import { flattenSettings } from '../util/flattenSettings';
import { flattenSettingsRaw } from '../util/flattenSettingsRaw';
import { LayerRepeater } from './LayerRepeater';
import { Fieldset } from './sidebar/Fieldset';

const Sidebar = () => {

    const [{ repo, theme }, { setRepo, setTheme, setHoveredLayer, setSelectedLayer }] = useTheme();
    const toast = useToast();

    const onThemeChange = id => {
        const options = require(`../templates/${id}/settings.js`);
        const { layers, palette } = options;
        setHoveredLayer(null);
        setSelectedLayer(null);
        setTheme({
            id,
            palette,
            settings: layers,
            userSettings: flattenSettings(layers),
            userSettingsRaw: flattenSettingsRaw(layers)
        })
    }


    return (
        <Box
            p={3}
            w={250}
            background="white"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)">

            <Fieldset title="Repository">
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
            </Fieldset>



            <Fieldset title="Theme">
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
            </Fieldset>

            <Fieldset title="Layers">
                <LayerRepeater />
            </Fieldset>

        </Box>
    )
}

export { Sidebar }