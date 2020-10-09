import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import useImage from 'use-image';
import { GitHubLogo, ImageBoundingBox, CenterGroup } from '../helpers';

const PeopleTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {

    const [peopleImage] = useImage(`images/${settings.illustration}`);
    const [textHeight, setTextHeight] = useState(null);

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

        {peopleImage && <ImageBoundingBox image={peopleImage} maxWidth={480} maxHeight={400} x={700} y={113} />}

        <CenterGroup x={100} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>
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
                fontFamily="Libre Baskerville"
                fontSize={54}
                fontStyle={700}
                fill={'#000'}
                y={50}
                width={width * 0.5}
                letterSpacing={-1}
                lineHeight={1.2}
                ref={node => {
                    node && setTextHeight(node.getHeight())
                }}
            />
        </CenterGroup>
    </Layer>
}

export default PeopleTheme;