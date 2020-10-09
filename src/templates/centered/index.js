import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo } from '../helpers';

const CenteredTheme = props => {

    const { width, height, palette, description, fullName, forks, openIssues, watchers, settings } = props;

    const LOGO_SIZE = 180;

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={settings.bgColor}
        />

        <ShapeGrid
            color={palette.shape}
            shape={settings.shape}
            rows={20}
            columns={4}
            offsetX={60}
            offsetY={60}
            x={-10}
            y={-30}
        />

        <Group y={128}>

            <GitHubLogo fill={settings.gitHubColor} width={LOGO_SIZE} height={LOGO_SIZE} x={width / 2 - (LOGO_SIZE / 2)} />

            <Text
                text={fullName}
                fontFamily="Poppins"
                fontSize={48}
                fontStyle={600}
                fill={settings.userTextColor}
                width={width}
                align="center"
                y={LOGO_SIZE + 40}
            />

        </Group>

        <Group y={410}>
            <Text
                text={description}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={settings.userTextColor}
                width={width}
                align="center"
            />
        </Group>

        <Group y={490}>
            <Text
                text={Intl.NumberFormat().format(forks)}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={settings.userTextColor}
                width={width}
                align="left"
                x={100}
            />
            <Text
                text={Intl.NumberFormat().format(openIssues)}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={settings.userTextColor}
                width={width}
                x={200}
                align="left"
            />
            <Text
                text={Intl.NumberFormat().format(watchers)}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={settings.userTextColor}
                width={width}
                x={300}
                align="left"
            />
        </Group>
    </Layer>
}

export default CenteredTheme;