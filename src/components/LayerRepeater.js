import React from 'react';
import { useTheme } from '../providers/theme';
import { merge } from 'lodash';
import { Layer } from './Layer';


const LayerRepeater = () => {

    const [{ theme, selectedLayer, hoveredLayer }, { setTheme, setSelectedLayer, setHoveredLayer }] = useTheme();

    const setVisibility = (id, bool) => {
        const newFlatSettings = merge(theme.userSettings, {
            [id]: {
                'visible': bool
            }
        });
        const newRawSettings = merge(theme.userSettingsRaw, {
            [id]: {
                'visible': {
                    value: bool
                }
            }
        });
        setTheme({
            userSettings: newFlatSettings,
            userSettingsRaw: newRawSettings,
        })
    }

    const mapLayers = (item, level = 0) => (
        <React.Fragment key={item.id}>
            <Layer
                label={item.label}
                level={level}
                id={item.id}
                hideable={item.hideable}
                visible={theme.userSettings[item.id].visible}
                type={item.type}
                selected={item.id && item.id === selectedLayer}
                hovered={item.id && item.id === hoveredLayer}
                setVisibility={setVisibility}
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