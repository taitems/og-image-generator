import React from 'react';
import { Layer, Group, Rect, Text, Image } from "react-konva";
import { ShapeGrid } from '../helpers/ShapeGrid';
import useImage from 'use-image';

const DefaultTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {

    const [image] = useImage('images/github-light.png');

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={settings.bgColor}
        />

        <ShapeGrid color={palette.shape} shape={settings.shape} />

        <Group x={200}>

            <Group y={160}>
                <Image image={image} width={32} height={32} y={-6} />
                <Text
                    text={fullName}
                    fontFamily="Inter"
                    fontSize={24}
                    fontStyle={400}
                    x={42}
                    fill={palette.userText}
                />
            </Group>

            <Text
                text={description}
                fontFamily="Inter"
                fontSize={72}
                fontStyle={800}
                fill={palette.mainText}
                y={210}
                width={width * 0.8}
                letterSpacing={-2.5}
            />
        </Group>
    </Layer>
}

export default DefaultTheme;