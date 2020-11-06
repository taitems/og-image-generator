const layers = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    settings: [{
        id: 'background',
        type: 'color',
        label: 'Background',
        value: '#0160FA'
    }],
    children: [{
        type: 'svg',
        id: 'githubLogo',
        label: 'GitHub Logo',
        settings: [{
            type: 'color',
            id: 'fill',
            label: 'Fill',
            value: '#FFF'
        }]
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
    }, {
        type: 'text',
        id: 'description',
        label: 'Description',
        settings: [{
            id: 'color',
            type: 'color',
            label: 'Color',
            value: '#FFFFFF'
        }]
    },
    {
        type: 'image',
        id: 'avatar',
        label: 'Avatar',
        editable: false,
        visible: false,
    }]
}]
const palette = ['#030047', '#FF3E6C', '#FFC2D6', '#FFCC3E', '#5F5FFF'];

module.exports = {
    layers,
    palette
}