import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { useTheme } from '../../providers/theme';
import { GitHubLogo, ImageBoundingBox, CenterGroup } from '../helpers';
import { Interactive } from '../helpers/Interactive';
import { UserAvatar } from '../helpers/UserAvatar';

const PeopleTheme = () => {

    const [{ theme, layout, repo }] = useTheme();
    const { width, height } = layout;
    const { full_name, description } = repo;
    const layers = theme.userSettings;

    const isCurrentTheme = theme.id === 'people';

    // const [peopleImage] = useImage(`images/${layers.illustration.image}`);
    const peopleImagePath = isCurrentTheme && `images/${layers.illustration.image}`;
    const [textHeight, setTextHeight] = useState(null);

    if (!isCurrentTheme) {
        return null;
    }


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

        <Group x={700} y={113}>
            <Interactive id="illustration">
                {peopleImagePath && <ImageBoundingBox imagePath={peopleImagePath} maxWidth={480} maxHeight={400} />}
            </Interactive>
        </Group>


        <CenterGroup x={100} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

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
                        fontStyle={400}
                        x={42}
                        fill={layers.repoInfo.color}
                    />
                </Interactive>
            </Group>

            <Interactive id="description">
                <Text
                    text={description}
                    fontFamily={layers.description.font}
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