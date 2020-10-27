import React, { useState } from 'react';
import { Group, Rect } from "react-konva";
import { useTheme } from '../../providers/theme';

const Interactive = ({ id, children }) => {
    const [{ repo, theme, selectedLayer }, { setSelectedLayer }] = useTheme();
    const [isOver, setIsOver] = useState(false);
    const [dimensions, setDimensions] = useState(null);
    const isSelected = selectedLayer === id;

    console.log({ repo })
    console.log({ theme })
    console.log({ selectedLayer })
    console.log({ setSelectedLayer })

    const DrawBox = ({ color }) => {
        return (
            <Rect
                x={dimensions.x + 1}
                y={dimensions.y + 1}
                width={dimensions.width - 2}
                height={dimensions.height - 2}
                stroke={color}
                strokeWidth={2} />
        );
    }
    return (
        <Group
            onClick={e => setSelectedLayer(id)}
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
            {children}
            {isSelected && dimensions && <DrawBox color="#ff0000" />}
            {isOver && dimensions && !isSelected && <DrawBox color="#0092FB" />}
        </Group>
    )
}

export { Interactive }