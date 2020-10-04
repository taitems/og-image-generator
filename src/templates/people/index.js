import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import useImage from 'use-image';
import { GitHubLogo, ImageBoundingBox } from '../helpers';

const PeopleTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {

    const [peopleImage] = useImage('images/035.png');

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={settings.bgColor}
        />

        <Rect
            x={0}
            y={height * .85}
            width={width}
            height={height * .15}
            fill={settings.bottomColor}
        />

        {peopleImage && <ImageBoundingBox image={peopleImage} maxWidth={480} maxHeight={320} x={700} y={150} />}

        <Group x={50}>

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
                fontSize={60}
                fontStyle={800}
                fill={'#000'}
                y={210}
                width={width * 0.55}
                letterSpacing={-2.5}
            />
        </Group>
    </Layer>
}

export default PeopleTheme;