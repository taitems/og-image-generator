import React from 'react';
import { Box, Select } from "@chakra-ui/react";
import { list } from '../templates/list';
import { useTheme } from '../providers/theme';
import { flattenSettings } from '../util/flattenSettings';
import { flattenSettingsRaw } from '../util/flattenSettingsRaw';
import { LayerRepeater } from './LayerRepeater';
import { Fieldset } from './sidebar/Fieldset';
import { RepoPicker } from './sidebar/pickers/RepoPicker';

const Sidebar = () => {

    const [{ theme }, { setTheme, setHoveredLayer, setSelectedLayer }] = useTheme();

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
                <RepoPicker />
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