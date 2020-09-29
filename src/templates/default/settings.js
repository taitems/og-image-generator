module.exports = [{
    title: 'Background Color',
    id: 'bgColor',
    type: 'color',
    value: '#FFFFFF'
}, {
    title: 'Text Color',
    id: 'textColor',
    type: 'color',
    value: '#000000'
}, {
    title: 'User Text Color',
    id: 'userTextColor',
    type: 'color',
    value: '#000000'
}, {
    title: 'Shape',
    id: 'shape',
    type: 'dropdown',
    value: 'square',
    options: [{
        text: 'Square',
        value: 'square'
    }, {
        text: 'Circle',
        value: 'circle'
    }]
}, {
    title: 'Shape Position',
    id: 'shapePosition',
    type: 'dropdown',
    value: 'left',
    options: [{
        text: 'Left',
        value: 'left'
    }, {
        text: 'Right',
        value: 'right'
    }]
}]