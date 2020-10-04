import React from 'react';
import { Group } from "react-konva";
const CenterGroup = ({ stageWidth, stageHeight, innerHeight, ...props }) => {
    const calcY = innerHeight ? (stageHeight / 2) - (innerHeight / 2) : 0;
    return <Group {...props} y={calcY} />
}
export { CenterGroup }