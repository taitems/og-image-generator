import React, { useState } from 'react';
import { Group } from "react-konva";
import { useTheme } from '../../providers/theme';
import { uiColors } from '../../util/uiColors';
import { DrawBox } from './DrawBox';

const Interactive = ({ id, children }) => {

    const [{ hoveredLayer, selectedLayer, theme }, { setHoveredLayer, setSelectedLayer }] = useTheme();
    const isHovered = hoveredLayer && hoveredLayer === id;
    const isSelected = selectedLayer && selectedLayer === id;
    const [dimensions, setDimensions] = useState(null);


    if (theme.userSettings[id].visible === false) {
        return null;
    }

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
            {isSelected && dimensions && <DrawBox dimensions={dimensions} color={uiColors.artboardLayer.selected} strokeWidth={3} />}
            {isHovered && dimensions && !isSelected && <DrawBox dimensions={dimensions} color={uiColors.artboardLayer.hovered} strokeWidth={3} />}
        </>
    )
}

export { Interactive }