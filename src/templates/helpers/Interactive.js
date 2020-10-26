import React, { useState } from 'react';
import { Group, Rect } from "react-konva";

const Interactive = ({ id, children, onSelect, selectedLayer }) => {
    const [isOver, setIsOver] = useState(false);
    const [dimensions, setDimensions] = useState(null);
    const isSelected = selectedLayer === id;

    const DrawBox = ({ color }) => {
        return (
            <Rect
                x={dimensions.x}
                y={dimensions.y}
                width={dimensions.width}
                height={dimensions.height}
                stroke={color}
                strokeWidth={2} />
        );
    }
    return (
        <Group
            onClick={e => onSelect(id)}
            onMouseEnter={e => {
                setDimensions({
                    x: e.target.x(),
                    y: e.target.y(),
                    width: e.target.width(),
                    height: e.target.height(),
                })
                setIsOver(true)
            }}
            onMouseLeave={e => {
                setIsOver(false)
            }}
        >
            {isSelected && dimensions && <DrawBox color="#ff0000" />}
            {isOver && dimensions && !isSelected && <DrawBox color="#0092FB" />}
            {children}
        </Group>
    )
}

export { Interactive }