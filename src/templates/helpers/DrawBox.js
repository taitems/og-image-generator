import React from 'react';
import { Rect } from "react-konva";

const DrawBox = ({ color, dimensions, strokeWidth }) => {
    return (
        <Rect
            x={dimensions.x + 1}
            y={dimensions.y + 1}
            width={dimensions.width - strokeWidth}
            height={dimensions.height - strokeWidth}
            stroke={color}
            strokeWidth={strokeWidth}
            fillEnabled={false}
        />
    );
}

export { DrawBox }