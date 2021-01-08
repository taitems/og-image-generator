import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useTheme } from '../providers/theme';
import { merge } from 'lodash';
import { DownloadButton } from './DownloadButton';
import { Fieldset } from './sidebar/Fieldset';
import { EmptyState } from './EmptyState';
import { PropertyList } from './PropertyList';

const Properties = () => {

    const [{ theme, selectedLayer }, { setTheme }] = useTheme();

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

    return (
        <Flex
            p={3}
            w={250}
            background="white"
            boxShadow="0 2px 4px rgba(0,0,0,0.1), 0 3px 12px rgba(0,0,0,0.05)"
            flexDirection="column"
        >
            <Box flexGrow={1}>
                <Fieldset title="Layer Properties">
                    {theme.userSettingsRaw && selectedLayer ?
                        <PropertyList properties={values} onSettingChange={onSettingChange} />
                        :
                        <EmptyState text="No layer selected" />
                    }
                </Fieldset>
            </Box>
            <Fieldset title="Save &amp; Export">
                <DownloadButton />
            </Fieldset>
        </Flex>
    );

}

export { Properties }
