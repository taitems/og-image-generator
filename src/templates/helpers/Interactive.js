import React, { useState } from 'react';
import { Group } from "react-konva";
import { useTheme } from '../../providers/theme';
import { DrawBox } from './DrawBox';

const Interactive = ({ id, children }) => {

    const [{ hoveredLayer, selectedLayer }, { setHoveredLayer, setSelectedLayer }] = useTheme();

    const isHovered = hoveredLayer && hoveredLayer === id;
    const isSelected = selectedLayer && selectedLayer === id;
    const [dimensions, setDimensions] = useState(null);

    console.log({ selectedLayer })

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
                ref={node => {
                    // if (node && (isHovered || isSelected) && !dimensions) {
                    //     const { x, y } = node.getAbsolutePosition();
                    //     // const { width, height } = node.getClientRect();
                    //     const width = node.width();
                    //     const height = node.height();
                    //     setDimensions({ x, y, width, height });
                    //     // if (hoveredLayer === id) {
                    //     //     setHoveredLayerDimensions({ x, y, width, height });
                    //     // }
                    //     // if (selectedLayer === id) {
                    //     //     setSelectedLayerDimensions({ x, y, width, height });
                    //     // }
                    // }
                }}
            >
                {children}
            </Group>
            {isSelected && dimensions && <DrawBox dimensions={dimensions} color="#ff0000" />}
            {isHovered && dimensions && !isSelected && <DrawBox dimensions={dimensions} color="#0092FB" />}
        </>
    )
}

export { Interactive }