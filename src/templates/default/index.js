import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid } from '../helpers/ShapeGrid';
import { GitHubLogo } from '../helpers/GithubLogo';

const DefaultTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {


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

                <GitHubLogo fill={settings.gitHubColor} width={32} height={32} y={-6} />

                <Text
                    text={fullName}
                    fontFamily="Inter"
                    fontSize={24}
                    fontStyle={400}
                    x={42}
                    fill={settings.userTextColor}
                />
            </Group>

            <Text
                text={description}
                fontFamily="Inter"
                fontSize={72}
                fontStyle={800}
                fill={settings.textColor}
                y={210}
                width={width * 0.8}
                letterSpacing={-2.5}
            />
        </Group>
    </Layer>
}

export default DefaultTheme;