import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo } from '../helpers';

const AnotherTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {


    const BORDER_INDENT = 75;

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={'#FFF'}
        />

        <ShapeGrid color={'rgba(0,0,0,0.2)'} shape={settings.shape} />

        <Rect
            x={BORDER_INDENT}
            y={BORDER_INDENT}
            width={width - BORDER_INDENT * 2}
            height={height - BORDER_INDENT * 2}
            fill={'#FFF'}
            shadowBlur={30}
            shadowOpacity={0.1}
        />
        <Rect
            x={BORDER_INDENT}
            y={BORDER_INDENT}
            width={width - BORDER_INDENT * 2}
            height={height - BORDER_INDENT * 2}
            fill={'#FFF'}
            shadowBlur={10}
            shadowOpacity={0.05}
        />

        <Group x={200}>

            <Group y={160}>

                <GitHubLogo fill={settings.gitHubColor} width={32} height={32} y={-6} />

                <Text
                    text={fullName}
                    fontFamily="Inter"
                    fontSize={24}
                    fontStyle={400}
                    x={42}
                    fill={'#000'}
                />
            </Group>

            <Text
                text={description}
                fontFamily="Inter"
                fontSize={72}
                fontStyle={800}
                fill={'#000'}
                y={210}
                width={width * 0.8}
                letterSpacing={-2.5}
            />
        </Group>
    </Layer>
}

export default AnotherTheme;