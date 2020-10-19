module.exports = [{
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
        type: 'text',
        id: 'description',
        label: 'Description',
        value: '#FFF',
        settings: [{
            id: 'color',
            type: 'color',
            label: 'Color',
            value: '#FFF'
        }]
    },
    {
        type: 'group',
        label: 'Repository Details',
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
                value: '#FFF'
            }]
        }]
    }]
}]