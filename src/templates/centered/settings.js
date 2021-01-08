const layers = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    settings: [{
        id: 'background',
        type: 'color',
        label: 'Background',
        value: '#3F00F1'
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
        type: 'image',
        id: 'avatar',
        label: 'Avatar',
        visible: false,
        settings: []
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
            value: 'rgba(255,255,255,0.8)'
        }, {
            id: 'font',
            type: 'font',
            label: 'Font',
            value: 'Poppins',
            options: [
                'Poppins',
                'Inter'
            ]
        }, {
            id: 'customDescription',
            type: 'description',
            label: 'Override Description',
            value: null
        }]
    }, {
        type: 'group',
        id: 'stats',
        label: 'Stats',
        settings: [{
            id: 'textColor',
            type: 'color',
            label: 'Text Color',
            value: '#FFFFFF'
        }, {
            id: 'iconColor',
            type: 'color',
            label: 'Icon Color',
            value: 'rgba(255,255,255,0.66)'
        }]
    }, {
        type: 'symbol',
        id: 'shapeGrid1',
        label: 'Shape Grid 1',
        settings: [{
            type: 'color',
            id: 'fill',
            label: 'Fill',
            value: 'rgba(255,255,255,0.35)'
        }]
    }, {
        type: 'symbol',
        id: 'shapeGrid2',
        label: 'Shape Grid 2',
        settings: [{
            type: 'color',
            id: 'fill',
            label: 'Fill',
            value: 'rgba(255,255,255,0.35)'
        }]
    }]
}]
const palette = ['#030047', '#FF3E6C', '#FFC2D6', '#FFCC3E', '#5F5FFF'];

module.exports = {
    layers,
    palette
}