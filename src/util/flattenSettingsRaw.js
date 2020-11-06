const flattenSettingsRaw = layers => {
    const flat = layers.map(mapLayerGroup).flat(Infinity).filter(val => !!val);
    return Object.assign(...flat);
}

const mapLayerGroup = g => {
    const nested = (g.children || []).map(mapLayerGroup);
    return [mapLayerSettings(g), ...nested];
}

const mapLayerSettings = l => {
    if (!l.id) {
        return null;
    }
    const keyedSettings = (l.settings || []).reduce((acc, val) => {
        acc[val.id] = val
        return acc;
    }, {});
    return {
        [l.id]: {
            visible: !(l.visible === false),
            ...keyedSettings
        }
    }
}

export { flattenSettingsRaw }