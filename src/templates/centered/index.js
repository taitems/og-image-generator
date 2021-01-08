import React from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { SvgIcon } from "react-konva-helpers";
import { useTheme } from '../../providers/theme';
import { ShapeGrid, GitHubLogo } from '../helpers';
import { Interactive } from '../helpers/Interactive';
import { UserAvatar } from '../helpers/UserAvatar';
import GithubForkIcon from '../../svg/gh-fork';
import GithubIssuesIcon from '../../svg/gh-issues';
import GithubStarIcon from '../../svg/gh-star';

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


        <Group x={width - 305} y={30}>
            <Interactive id="shapeGrid1">
                <ShapeGrid
                    color={layers.shapeGrid1.fill}
                    shape={'circle'}
                    rows={3}
                    size={6}
                    columns={7}
                    offsetX={45}
                    offsetY={45}
                />
            </Interactive>
        </Group>

        <Group x={30} y={height - 120}>
            <Interactive id="shapeGrid2">
                <ShapeGrid
                    color={layers.shapeGrid2.fill}
                    shape={'circle'}
                    rows={3}
                    size={6}
                    columns={7}
                    offsetX={45}
                    offsetY={45}
                />
            </Interactive>
        </Group>

        <Interactive id="avatar">
            <UserAvatar
                src={repo.owner.avatar_url}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                y={112}
                x={(width - LOGO_SIZE) / 2}
            />
        </Interactive>

        <Interactive id="githubLogo">
            <GitHubLogo
                fill={layers.githubLogo.fill}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                y={112}
                x={(width - LOGO_SIZE) / 2}
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
                y={112 + LOGO_SIZE + 40}
            />
        </Interactive>


        <Interactive id="description">
            <Text
                text={description}
                fontFamily="Poppins"
                fontSize={32}
                fontStyle={400}
                fill={layers.description.color}
                width={width * .85}
                x={width * .075}
                y={398}
                align="center"
            />
        </Interactive>


        <Group y={470} x={400} width={200}>
            <Interactive id="stats">
                <SvgIcon xml={GithubForkIcon} fill={layers.stats.iconColor} x={0} />
                <Text
                    text={Intl.NumberFormat().format(forks)}
                    fontFamily="Poppins"
                    fontSize={28}
                    fontStyle={400}
                    fill={layers.stats.textColor}
                    width={width}
                    align="left"
                    x={32}
                />
                <SvgIcon xml={GithubIssuesIcon} fill={layers.stats.iconColor} x={100} />
                <Text
                    text={Intl.NumberFormat().format(open_issues)}
                    fontFamily="Poppins"
                    fontSize={28}
                    fontStyle={400}
                    fill={layers.stats.textColor}
                    width={width}
                    x={132}
                    align="left"
                />
                <SvgIcon xml={GithubStarIcon} fill={layers.stats.iconColor} x={200} />
                <Text
                    text={Intl.NumberFormat().format(watchers)}
                    fontFamily="Poppins"
                    fontSize={28}
                    fontStyle={400}
                    fill={layers.stats.textColor}
                    width={width}
                    x={232}
                    align="left"
                />
            </Interactive>
        </Group>
    </Layer>
}

export default CenteredTheme;