import React from 'react';
import { Box } from '@chakra-ui/core';
import { useTheme } from '../providers/theme';
import { ImagePicker, ColorPicker } from './sidebar/pickers';

const Properties = () => {

    // const [{ repo, theme, selectedLayer }, { setRepo, setTheme, setSelectedLayer }] = useTheme();
    const [{ theme, selectedLayer }] = useTheme();

    const values = theme.userSettingsRaw && selectedLayer && theme.userSettingsRaw[selectedLayer];

    const PropertyList = ({ properties }) => {
        const { visible, ...theRest } = properties;
        console.log({ theRest })
        return theRest && Object.keys(theRest).map(key => {
            const p = theRest[key];
            console.log({ p })
            return (
                <Box>
                    <Box>
                        {p.label}
                    </Box>
                    <Box>
                        {{
                            color: <ColorPicker value={p.value} color={p.value} />,
                            image: <ImagePicker value={p.value} />
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
