import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import useImage from 'use-image';
import { useTheme } from '../../providers/theme';
import { GitHubLogo, ImageBoundingBox, CenterGroup } from '../helpers';
import { Interactive } from '../helpers/Interactive';

const PeopleTheme = () => {

    const [{ theme, layout, repo }] = useTheme();
    const { width, height } = layout;
    const { full_name, description } = repo;
    const layers = theme.userSettings;

    const [peopleImage] = useImage(`images/${layers.illustration.image}`);
    const [textHeight, setTextHeight] = useState(null);

    theme.id !== 'people' && alert('omg')

    return <Layer>

        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={layers.artboard.background}
        />


        <Group
            x={0}
            y={height * .85}>
            <Interactive id="bottomShape">
                <Rect
                    width={width}
                    height={height * .15}
                    fill={layers.bottomShape.fill}
                />
            </Interactive>
        </Group>

        {peopleImage && <Group x={700} y={113}>
            <Interactive id="illustration">
                <ImageBoundingBox image={peopleImage} maxWidth={480} maxHeight={400} />
            </Interactive>
        </Group>
        }

        <CenterGroup x={100} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>
                <Interactive id="githubLogo">
                    <GitHubLogo fill={layers.githubLogo.fill} width={32} height={32} y={-6} />
                </Interactive>
                <Interactive id="repoInfo">
                    <Text
                        text={full_name}
                        fontFamily="Poppins"
                        fontSize={24}
                        fontStyle={400}
                        x={42}
                        fill={layers.repoInfo.color}
                    />
                </Interactive>
            </Group>

            <Interactive id="description">
                <Text
                    text={description}
                    fontFamily="Poppins"
                    fontSize={54}
                    fontStyle={600}
                    fill={layers.description.color}
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