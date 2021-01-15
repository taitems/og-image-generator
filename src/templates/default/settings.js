const layers = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    hideable: false,
    settings: [{
        id: 'background',
        type: 'color',
        label: 'Background',
        value: '#3F00F1'
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
            }, {
                id: 'font',
                type: 'font',
                label: 'Font',
                value: 'Poppins',
                options: [
                    'Poppins',
                    'Inter'
                ]
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
const palette = [
    '#02002E',
    '#030047',
    '#5D5C89',
    '#FF3E6C',
    '#FFA0B7',
    '#FFC2D6',
    '#FFF4F7',
    '#FFCC3E',
    '#FFE6A0',
    '#FFF2CF',
    '#FFFAEE',
    '#3F00F1',
    '#5F5FFF',
    '#B1B1FF',
    '#D7D7FF',
    '#F1F1FF',
    '#FFFFFF'
];


module.exports = {
    layers,
    palette
}