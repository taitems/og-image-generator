import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo } from '../helpers';
import { Interactive } from '../helpers/Interactive';

const CenteredTheme = props => {

    const { width, height, palette, description, fullName, forks, openIssues, watchers, settings, onSelect, selectedLayer } = props;

    const LOGO_SIZE = 180;

    return <Layer>

        <Interactive id="artboard" onSelect={onSelect} selectedLayer={selectedLayer}>
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={settings.artboard.background}
            />
        </Interactive>

        <ShapeGrid
            color={'#FFF'}
            shape={'circle'}
            rows={20}
            columns={4}
            offsetX={60}
            offsetY={60}
            x={-10}
            y={-30}
        />


        <Interactive id="githubLogo" onSelect={onSelect} selectedLayer={selectedLayer}>
            <GitHubLogo fill={settings.githubLogo.fill} width={LOGO_SIZE} height={LOGO_SIZE} x={width / 2 - (LOGO_SIZE / 2)} y={128} />
        </Interactive>

        <Interactive id="repoInfo" onSelect={onSelect} selectedLayer={selectedLayer}>
            <Text
                text={fullName}
                fontFamily="Poppins"
                fontSize={48}
                fontStyle={600}
                fill={settings.repoInfo.color}
                width={width * .8}
                align="center"
                x={width * .1}
                y={128 + LOGO_SIZE + 40}
            />
        </Interactive>


        <Interactive id="description" onSelect={onSelect} selectedLayer={selectedLayer}>
            <Text
                text={description}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={settings.description.color}
                width={width * .8}
                x={width * .1}
                y={410}
                align="center"
            />
        </Interactive>

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