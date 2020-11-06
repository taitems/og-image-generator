module.exports = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    settings: [{
        id: 'background',
        type: 'color',
        label: 'Background',
        value: '#FFF'
    }],
    children: [{
        type: 'text',
        id: 'description',
        label: 'Description',
        settings: [{
            id: 'color',
            type: 'color',
            label: 'Color',
            value: '#000'
        }]
    },
    {
        type: 'group',
        id: 'repoDetails',
        label: 'Repository Details',
        children: [{
            type: 'svg',
            id: 'githubLogo',
            label: 'GitHub Logo',
            settings: [{
                type: 'color',
                id: 'fill',
                label: 'Fill',
                value: 'rgba(0,0,0,0.2)'
            }]
        }, {
            type: 'image',
            id: 'avatar',
            label: 'Avatar',
            editable: false,
            visible: false,
        }, {
            type: 'text',
            id: 'repoInfo',
            label: 'Information',
            settings: [{
                id: 'color',
                type: 'color',
                label: 'Color',
                value: '#000'
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
            value: 'rgba(0,0,0,0.2)'
        }]
    }]
}]