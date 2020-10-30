import React from 'react';
import { useTheme } from '../providers/theme';
import { Layer } from './Layer';


const LayerRepeater = () => {

    const [{ theme, selectedLayer }, { setSelectedLayer, setHoveredLayer }] = useTheme();

    const mapLayers = (item, level = 0) => (
        <>
            <Layer
                label={item.label}
                level={level}
                visible={item.visible}
                type={item.type}
                selected={item.id && item.id === selectedLayer}
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
        </>
    )

    return theme.settings && theme.settings.map(mapLayers)

}

export { LayerRepeater }