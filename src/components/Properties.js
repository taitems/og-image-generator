import React, { useReducer } from 'react';
import { Box } from '@chakra-ui/core';
import { useTheme } from '../providers/theme';
import { ImagePicker, ColorPicker } from './sidebar/pickers';
import { merge } from 'lodash';

const Properties = () => {

    // const [{ repo, theme, selectedLayer }, { setRepo, setTheme, setSelectedLayer }] = useTheme();
    const [{ theme, selectedLayer }, { setTheme }] = useTheme();

    const [colorPickerOpen, setColorPickerOpen] = useReducer(
        (oldState, newState) => ({ ...oldState, ...newState }),
        {}
    )

    const onSettingChange = (settingKey, settingValue) => {

        const newFlatSettings = merge(theme.userSettings, {
            [selectedLayer]: {
                [settingKey]: settingValue
            }
        });
        const newRawSettings = merge(theme.userSettingsRaw, {
            [selectedLayer]: {
                [settingKey]: {
                    value: settingValue
                }
            }
        });
        setTheme({
            userSettings: newFlatSettings,
            userSettingsRaw: newRawSettings,
        })
    }

    const values = theme.userSettingsRaw && selectedLayer && theme.userSettingsRaw[selectedLayer];

    const PropertyList = ({ properties }) => {
        const { visible, ...theRest } = properties;
        return theRest && Object.keys(theRest).map((propertyId, index) => {
            const p = theRest[propertyId];
            return (
                <Box key={index}>
                    <Box>
                        {p.label}
                    </Box>
                    <Box>
                        {{
                            color: <ColorPicker id={propertyId} value={p.value} color={p.value} updateOpenState={setColorPickerOpen} isOpen={colorPickerOpen[propertyId]} onChange={c => {
                                const { r, g, b, a } = c.rgb;
                                const color = a < 1 ? `rgba(${r},${g},${b},${a})` : c.hex;
                                onSettingChange(propertyId, color);
                            }} />,
                            image: <ImagePicker value={p.value} options={p.options} onChange={val => onSettingChange(p.id, val)} />
                        }[p.type]}
                    </Box>
                </Box>
            )
        })

    }

    return (
        <Box
            p={3}
            w={250}
            background="white"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
        >
            <Box>Properties pane</Box>
            {theme.userSettingsRaw && selectedLayer && (
                <PropertyList properties={values} />
            )}

        </Box>
    );

}

export { Properties }
