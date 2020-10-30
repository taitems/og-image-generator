import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { useTheme } from '../../providers/theme';
import { ShapeGrid, GitHubLogo } from '../helpers';

const AnotherTheme = () => {


    const [{ theme, layout, repo }] = useTheme();
    const { width, height } = layout;
    const { full_name, description, owner, forks, open_issues, watchers, name } = repo;
    const layers = theme.userSettings;


    const BORDER_INDENT = 75;

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={layers.artboard.background}
        />

        <ShapeGrid color={layers.shapeGrid.fill} shape="square" />

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

                <GitHubLogo fill={layers.gitHubColor} width={32} height={32} y={-6} />

                <Text
                    text={full_name}
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