import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import useImage from 'use-image';
import { GitHubLogo, ImageBoundingBox, CenterGroup } from '../helpers';
import { Interactive } from '../helpers/Interactive';

const PeopleTheme = ({ width, height, palette, description, fullName, owner, name, settings }) => {

    const [peopleImage] = useImage(`images/${settings.illustration.image}`);
    const [textHeight, setTextHeight] = useState(null);

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={settings.artboard.background}
        />


        <Interactive id="bottomShape">
            <Rect
                x={0}
                y={height * .85}
                width={width}
                height={height * .15}
                fill={settings.bottomShape.fill}
            />
        </Interactive>

        {peopleImage && <Interactive id="illustration">
            <ImageBoundingBox image={peopleImage} maxWidth={480} maxHeight={400} x={700} y={113} />
        </Interactive>}

        <CenterGroup x={100} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>
                <Interactive id="githubLogo">
                    <GitHubLogo fill={settings.githubLogo.fill} width={32} height={32} y={-6} />
                </Interactive>
                <Interactive id="repoInfo">
                    <Text
                        text={fullName}
                        fontFamily="Poppins"
                        fontSize={24}
                        fontStyle={400}
                        x={42}
                        fill={'#000'}
                    />
                </Interactive>
            </Group>

            <Interactive id="description">
                <Text
                    text={description}
                    fontFamily="Poppins"
                    fontSize={54}
                    fontStyle={600}
                    fill={'#000'}
                    y={50}
                    width={width * 0.5}
                    letterSpacing={0}
                    lineHeight={1.2}
                    ref={node => {
                        node && setTextHeight(node.getHeight())
                    }}
                />
            </Interactive>
        </CenterGroup>
    </Layer>
}

export default PeopleTheme;