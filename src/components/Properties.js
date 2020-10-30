import React, { useReducer } from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { useTheme } from '../providers/theme';
import { ImagePicker, ColorPicker, FontPicker } from './sidebar/pickers';
import { merge } from 'lodash';
import { DownloadButton } from './DownloadButton';

const Properties = () => {

    const [{ theme, selectedLayer }, { setTheme }] = useTheme();

    const [colorPickerOpen, setColorPickerOpen] = useReducer(
        (oldState, newState) => ({ ...oldState, ...newState }),
        {}
    )

    const onSettingChange = (settingKey, settingValue) => {

        console.log({ settingKey, settingValue })

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
        const { visible, ...otherProperies } = properties;
        return otherProperies && Object.keys(otherProperies).map((propertyId, index) => {
            const p = otherProperies[propertyId];
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
                            image: <ImagePicker value={p.value} options={p.options} onChange={val => onSettingChange(p.id, val)} />,
                            font: <FontPicker value={p.value} options={p.options} onChange={e => onSettingChange(p.id, e.target.value)} />,
                        }[p.type]}
                    </Box>
                </Box>
            )
        })

    }

    return (
        <Flex
            p={3}
            w={250}
            background="white"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            flexDirection="column"
        >
            <Box flexGrow={1}>
                Properties pane
                {theme.userSettingsRaw && selectedLayer && (
                    <PropertyList properties={values} />
                )}
            </Box>
            <DownloadButton />
        </Flex>
    );

}

export { Properties }
