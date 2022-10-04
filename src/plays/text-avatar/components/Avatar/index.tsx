import React from 'react';
import { generateAbbreName, getRandomColor } from '../../hooks/utils';
import './style.scss';
type Props = {
    first: string;
    last: string;
}
function Avatar({first, last}: Props) {
    const randomColor = getRandomColor();
    const abbreName = generateAbbreName(first, last);
    
    return (
        <div className='avatar'
            style={{
                backgroundColor: randomColor,
            }}>
            {abbreName}
        </div>
    )
}

export default Avatar;