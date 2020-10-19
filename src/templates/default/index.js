import React, { useState } from 'react';
import { Layer, Group, Rect, Text } from "react-konva";
import { ShapeGrid, GitHubLogo, CenterGroup } from '../helpers';

const DefaultTheme = ({ width, height, palette, description, fullName, owner, name, settings, onSelect }) => {

    const [textHeight, setTextHeight] = useState(null);

    const Interact = ({ id, children }) => {
        const [isOver, setIsOver] = useState(false);
        const [dimensions, setDimensions] = useState(null);
        return (
            <Group
                onClick={e => onSelect(id)}
                onMouseEnter={e => {
                    console.log('over', e);
                    console.log(e.target.height())
                    console.log(e.target.x())
                    setDimensions({
                        width: e.target.width(),
                        height: e.target.height(),
                        x: e.target.x(),
                        y: e.target.y(),
                    })
                    setIsOver(true)
                }}
                onMouseLeave={e => {
                    console.log('out');
                    setIsOver(false)
                }}
            >
                {isOver && dimensions && <Rect x={dimensions.x} y={dimensions.y} width={dimensions.width} height={dimensions.height} fill="red" />}
                {children}
            </Group>
        )
    }


    return <Layer>

        <Interact id="artboard">
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={settings.artboard.background}
            />
        </Interact>

        <ShapeGrid color={palette.shape} shape={settings.shape} x={50} y={10} />

        <CenterGroup x={200} stageHeight={height} innerHeight={textHeight && 50 + textHeight}>

            <Group>

                <Interact id="githubLogo">
                    <GitHubLogo fill={settings.githubLogo.fill} width={32} height={32} y={-6} />
                </Interact>

                <Interact id="repoInfo">
                    <Text
                        text={fullName}
                        fontFamily="Poppins"
                        fontSize={24}
                        fontStyle={600}
                        x={42}
                        fill={settings.repoInfo.color}
                    />
                </Interact>
            </Group>

            <Interact id="description">
                <Text
                    text={description}
                    fontFamily="Poppins"
                    fontSize={72}
                    fontStyle={600}
                    fill={settings.description.color}
                    y={50}
                    width={width * 0.8}
                    letterSpacing={-2.5}
                    ref={node => {
                        node && setTextHeight(node.getHeight())
                    }}
                />
            </Interact>
        </CenterGroup>
    </Layer>
}

export default DefaultTheme;