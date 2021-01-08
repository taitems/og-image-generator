import React from 'react'
import { useTheme } from '../providers/theme';
import { ImagePicker, ColorPicker, FontPicker, DescriptionPicker } from './sidebar/pickers';

const PropertySwitch = ({ type, id, value, options, onChange }) => {

    const [{ repo, theme }] = useTheme();

    return {
        color: <ColorPicker key={id} value={value} color={value} onChange={val => onChange(id, val)} palette={theme.palette} />,
        image: <ImagePicker key={id} value={value} options={options} onChange={val => onChange(id, val)} />,
        font: <FontPicker key={id} value={value} options={options} onChange={val => onChange(id, val)} />,
        description: <DescriptionPicker key={id} value={value || repo.description} onChange={val => onChange(id, val)} />
    }[type]
}

export { PropertySwitch }
