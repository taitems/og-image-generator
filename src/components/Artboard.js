import React from 'react';
import { Box } from "@chakra-ui/core";
import { Stage } from "react-konva";
import loadable from '@loadable/component';
import { ThemeContext, useTheme } from '../providers/theme';

const SelectedTheme = loadable(props => import(`../templates/${props.id}`));

const Artboard = () => {

    const [{ stageRef, theme, layout }] = useTheme();

    return <Box>
        <Box fontSize={13} py={1} color="gray.400">
            Artboard - {layout.width} x {layout.height}
        </Box>
        <Box boxShadow="0 2px 20px rgba(0,0,0,0.1)">
            <ThemeContext.Consumer>
                {value => (
                    <Stage width={layout.width} height={layout.height} ref={stageRef}>
                        <ThemeContext.Provider value={value}>
                            <SelectedTheme id={theme.id} />
                        </ThemeContext.Provider>
                    </Stage>
                )}
            </ThemeContext.Consumer>
        </Box>
    </Box>
}

export { Artboard }