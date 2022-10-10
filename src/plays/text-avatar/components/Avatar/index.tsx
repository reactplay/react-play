import { AvatarProps } from 'plays/text-avatar/types';
import React from 'react';
import { generateAbbreName, getRandomColor } from '../../utils';
import './style.scss';

function Avatar({first, last}: AvatarProps) {
    const randomColor = getRandomColor();
    const abbreName = generateAbbreName(first, last);
    
    return (
        <div className='text-avatar_avatar'
            style={{
                backgroundColor: randomColor,
            }}>
            {abbreName}
        </div>
    )
}

export default Avatar;