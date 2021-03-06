import React from 'react';
import { Group, Rect, Circle } from "react-konva";

const fill = len => { return new Array(len).fill(0) };


const MakeShapes = ({ color, shape, rows, columns, size, offsetX, offsetY }) => {
    return fill(rows).map((value, yPos) => {
        return fill(columns).map((otherValue, xPos) => {
            if (shape === 'square') {
                return <Rect
                    key={yPos.toString() + xPos.toString()}
                    x={xPos * offsetX}
                    y={yPos * offsetY}
                    width={size}
                    height={size}
                    fill={color}
                />
            } else if (shape === 'circle') {
                return <Circle
                    key={yPos.toString() + xPos.toString()}
                    x={xPos * offsetX}
                    y={yPos * offsetY}
                    radius={size / 2}
                    fill={color}
                />
            }
            return null;
        })
    })
}

const ShapeGrid = ({ color, shape = 'triangle', rows = 24, columns = 4, size = 8, offsetX = 24, offsetY = 24 }) => {
    const width = columns * size + (columns - 1) * offsetX;
    const height = rows * size + (rows - 1) * offsetY;
    return <Group>
        <MakeShapes
            color={color}
            shape={shape}
            rows={rows}
            columns={columns}
            size={size}
            offsetX={offsetX}
            offsetY={offsetY}
        />
        <Rect fill="rgba(0,0,0,0)" width={width} height={height} />
    </Group>
}

export { ShapeGrid }