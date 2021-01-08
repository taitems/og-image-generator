import { theme } from '@chakra-ui/react';
const { colors } = theme;

const uiColors = {
    sidebarLayer: {
        selected: colors.cyan['100'],
        hovered: colors.cyan['50'],
        disabledHover: colors.gray['50'],
        disabledSelected: colors.gray['100'],
    },
    artboardLayer: {
        selected: colors.cyan['300'],
        hovered: colors.cyan['400']
    },
    artboardText: {
        selected: colors.cyan['400'],
        hovered: colors.cyan['500'],
        default: colors.gray['400']
    }
}

export { uiColors } 
