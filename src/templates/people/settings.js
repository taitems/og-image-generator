module.exports = [{
    id: 'artboard',
    type: 'artboard',
    label: 'Artboard',
    hideable: false,
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
        }, {
            id: 'font',
            type: 'font',
            label: 'Font',
            value: 'Poppins',
            options: [
                'Poppins',
                'Libre Baskerville'
            ]
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
        type: 'image',
        id: 'illustration',
        label: 'Illustration',
        settings: [{
            type: 'image',
            id: 'image',
            label: 'Image',
            value: 'people-035.png',
            options: [
                'people-014.png', 'people-026.png', 'people-034.png', 'people-035.png', 'people-055.png', 'people-106.png', 'people-124.png', 'people-134.png', 'people-145.png', 'people-174.png', 'people-184.png', 'people-185.png',
            ]
        }]
    }, {
        type: 'shape',
        id: 'bottomShape',
        label: 'Bottom Shape',
        visible: false,
        settings: [{
            type: 'color',
            id: 'fill',
            label: 'Fill',
            value: '#f0d400'
        }]
    }]
}]