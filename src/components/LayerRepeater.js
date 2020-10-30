import React from 'react';
import { useTheme } from '../providers/theme';
import { Layer } from './Layer';


const LayerRepeater = () => {

    const [{ theme, selectedLayer, hoveredLayer }, { setSelectedLayer, setHoveredLayer }] = useTheme();

    const mapLayers = (item, level = 0) => (
        <React.Fragment key={item.id}>
            <Layer
                label={item.label}
                level={level}
                visible={item.visible}
                type={item.type}
                selected={item.id && item.id === selectedLayer}
                hovered={item.id && item.id === hoveredLayer}
                onMouseEnter={e => {
                    setHoveredLayer(item.id)
                }}
                onMouseLeave={e => {
                    setHoveredLayer(null)
                }}
                onClick={e => {
                    setSelectedLayer(item.id);
                }}
            />
            {item.children && item.children.map(c => {
                return mapLayers(c, level + 1)
            })}
        </React.Fragment>
    )

    return theme.settings && theme.settings.map(mapLayers)

}

export { LayerRepeater }