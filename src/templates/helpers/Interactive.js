import { theme } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Group } from "react-konva";
import { useTheme } from '../../providers/theme';
import { DrawBox } from './DrawBox';

const Interactive = ({ id, children }) => {

    const [{ hoveredLayer, selectedLayer }, { setHoveredLayer, setSelectedLayer }] = useTheme();
    const isHovered = hoveredLayer && hoveredLayer === id;
    const isSelected = selectedLayer && selectedLayer === id;
    const [dimensions, setDimensions] = useState(null);
    const { colors } = theme;

    return (
        <>
            <Group
                onClick={e => setSelectedLayer(id)}
                onMouseEnter={e => {
                    !dimensions && setDimensions({
                        x: e.target.x(),
                        y: e.target.y(),
                        width: e.target.width(),
                        height: e.target.height(),
                    })
                    setHoveredLayer(id);
                }}
                onMouseLeave={e => {
                    setHoveredLayer(null);
                }}
            >
                {children}
            </Group>
            {isSelected && dimensions && <DrawBox dimensions={dimensions} color={colors.blue['300']} strokeWidth={3} />}
            {isHovered && dimensions && !isSelected && <DrawBox dimensions={dimensions} color={colors.blue['200']} strokeWidth={3} />}
        </>
    )
}

export { Interactive }