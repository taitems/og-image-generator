import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { useTheme } from '../../providers/theme';
import { ShapeGrid, GitHubLogo } from '../helpers';
import { Interactive } from '../helpers/Interactive';
import { UserAvatar } from '../helpers/UserAvatar';

const CenteredTheme = props => {

    const [{ theme, layout, repo }] = useTheme();
    const { width, height } = layout;
    const { full_name, description, forks, open_issues, watchers } = repo;
    const layers = theme.userSettings;

    const LOGO_SIZE = 180;

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


        <Interactive id="githubLogo">
            <GitHubLogo
                fill={layers.githubLogo.fill}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                x={(width / 2) - (LOGO_SIZE - 10)}
                y={128}
            />
        </Interactive>
        <Interactive id="avatar">
            <UserAvatar
                src={repo.owner.avatar_url}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                x={(width / 2) - 10}
                y={128}
            />
        </Interactive>

        <Interactive id="repoInfo">
            <Text
                text={full_name}
                fontFamily="Poppins"
                fontSize={48}
                fontStyle={600}
                fill={layers.repoInfo.color}
                width={width * .8}
                align="center"
                x={width * .1}
                y={128 + LOGO_SIZE + 40}
            />
        </Interactive>


        <Interactive id="description">
            <Text
                text={description}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={layers.description.color}
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
                fill={layers.userTextColor}
                width={width}
                align="left"
                x={100}
            />
            <Text
                text={Intl.NumberFormat().format(open_issues)}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={layers.userTextColor}
                width={width}
                x={200}
                align="left"
            />
            <Text
                text={Intl.NumberFormat().format(watchers)}
                fontFamily="Poppins"
                fontSize={28}
                fontStyle={400}
                fill={layers.userTextColor}
                width={width}
                x={300}
                align="left"
            />
        </Group>
    </Layer>
}

export default CenteredTheme;