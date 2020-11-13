import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { useTheme } from '../../providers/theme';
import { ShapeGrid, GitHubLogo, CenterGroup } from '../helpers';
import { Interactive } from '../helpers/Interactive';
import { UserAvatar } from '../helpers/UserAvatar';

const DefaultTheme = () => {

    const [{ theme, layout, repo }] = useTheme();
    const { width, height } = layout;
    const { full_name, description } = repo;
    const layers = theme.userSettings;

    const [textHeight, setTextHeight] = useState(null);

    return <Layer>

        <Interactive id="artboard">
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={layers.artboard.background}
            />
        </Interactive>

        <Group x={50} y={10}>
            <Interactive id="shapeGrid">
                <ShapeGrid color={layers.shapeGrid.fill} shape={'square'} />
            </Interactive>
        </Group>


        <CenterGroup x={200} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>

                <Interactive id="githubLogo">
                    <GitHubLogo fill={layers.githubLogo.fill} width={32} height={32} y={-6} />
                </Interactive>

                <Interactive id="avatar">
                    <UserAvatar src={repo.owner.avatar_url} x={0} y={-6} width={32} height={32} />
                </Interactive>

                <Interactive id="repoInfo">
                    <Text
                        text={full_name}
                        fontFamily="Poppins"
                        fontSize={24}
                        fontStyle={600}
                        x={42}
                        fill={layers.repoInfo.color}
                    />
                </Interactive>
            </Group>

            <Interactive id="description">
                <Text
                    text={description}
                    fontFamily="Poppins"
                    fontSize={72}
                    fontStyle={600}
                    fill={layers.description.color}
                    y={50}
                    width={width * 0.8}
                    letterSpacing={-2.5}
                    ref={node => {
                        node && setTextHeight(node.getHeight())
                    }}
                />
            </Interactive>
        </CenterGroup>
    </Layer>
}

export default DefaultTheme;