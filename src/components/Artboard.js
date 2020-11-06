import React from 'react';
import { Box } from "@chakra-ui/core";
import { Stage } from "react-konva";
import { ThemeContext, useTheme } from '../providers/theme';
import PeopleTheme from '../templates/people';
import DefaultTheme from '../templates/default';
import AnotherTheme from '../templates/another';
import CenteredTheme from '../templates/centered';
import { uiColors } from '../util/uiColors';
const { artboardText } = uiColors;

// const SelectedTheme = loadable(props => import(`../templates/${props.id}`));
const SelectedTheme = ({ id }) => {
    return ({
        'people': <PeopleTheme />,
        'default': <DefaultTheme />,
        'another': <AnotherTheme />,
        'centered': <CenteredTheme />,
    }[id])
}

const Artboard = () => {


    const [{ stageRef, theme, layout, hoveredLayer, selectedLayer }, { setSelectedLayer, setHoveredLayer }] = useTheme();
    const isHovered = hoveredLayer === 'artboard';
    const isSelected = selectedLayer === 'artboard';
    const textColor = isSelected ? artboardText.selected : isHovered ? artboardText.hovered : artboardText.default;

    return <Box>
        <Box
            fontSize={13}
            py={1}
            color={textColor}
            onClick={() => { setSelectedLayer('artboard') }}
            onMouseEnter={() => { setHoveredLayer('artboard') }}
            onMouseLeave={() => { setHoveredLayer(null) }}
            cursor="default"
        >
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