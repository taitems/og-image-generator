const layers = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    hideable: false,
    settings: [{
        id: 'background',
        type: 'color',
        label: 'Background',
        value: '#0160FA'
    }],
    children: [{
        type: 'text',
        id: 'description',
        label: 'Description',
        settings: [{
            id: 'color',
            type: 'color',
            label: 'Color',
            value: '#FFF'
        }]
    },
    {
        type: 'group',
        id: 'repoDetails',
        label: 'Repository Details',
        hideable: false,
        children: [{
            type: 'svg',
            id: 'githubLogo',
            label: 'GitHub Logo',
            settings: [{
                type: 'color',
                id: 'fill',
                label: 'Fill',
                value: 'rgba(255,255,255,0.85)'
            }]
        }, {
            type: 'image',
            id: 'avatar',
            label: 'Avatar',
            visible: false,
        }, {
            type: 'text',
            id: 'repoInfo',
            label: 'Information',
            settings: [{
                id: 'color',
                type: 'color',
                label: 'Color',
                value: '#FFF'
            }]
        }]
    }, {
        type: 'symbol',
        id: 'shapeGrid',
        label: 'Shape Grid',
        settings: [{
            type: 'color',
            id: 'fill',
            label: 'Fill',
            value: 'rgba(255,255,255,0.25)'
        }]
    }]
}]
const palette = ['#030047', '#FF3E6C', '#FFC2D6', '#FFCC3E', '#5F5FFF'];

module.exports = {
    layers,
    palette
}