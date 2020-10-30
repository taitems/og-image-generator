import React from 'react';
import { Rect } from "react-konva";

const DrawBox = ({ color, dimensions }) => {
    return (
        <Rect
            x={dimensions.x + 1}
            y={dimensions.y + 1}
            width={dimensions.width - 2}
            height={dimensions.height - 2}
            stroke={color}
            strokeWidth={2}
            fillEnabled={false}
        />
    );
}

export { DrawBox }