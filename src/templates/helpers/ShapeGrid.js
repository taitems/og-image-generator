import React from 'react';
import { Group, Rect, Circle } from "react-konva";

const fill = len => { return new Array(len).fill(0) };

const ROWS = 20;
const COLUMNS = 4
const SIZE = 8;
const OFFSETX = 24;
const OFFSETY = 24;

const MakeShapes = ({ color, shape }) => {
    return fill(ROWS).map((value, yPos) => {
        return fill(COLUMNS).map((otherValue, xPos) => {
            if (shape === 'square') {
                return <Rect
                    key={yPos.toString() + xPos.toString()}
                    x={xPos * OFFSETX}
                    y={yPos * OFFSETY}
                    width={SIZE}
                    height={SIZE}
                    fill={color}
                />
            } else if (shape === 'circle') {
                return <Circle
                    key={yPos.toString() + xPos.toString()}
                    x={xPos * OFFSETX}
                    y={yPos * OFFSETY}
                    radius={SIZE / 2}
                    fill={color}
                />
            }
            return null;
        })
    })
}

const ShapeGrid = ({ color, shape = 'circle' }) => (
    <Group x={OFFSETX * 2} y={SIZE}>
        <MakeShapes color={color} shape={shape} />
    </Group>
)

export { ShapeGrid }