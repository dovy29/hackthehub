import React from 'react'
import Icon from '../../Icon';
import Button from './Button';

function ImageButton({ label, action, image }) {
    return (
        <div>
            <Icon name={image} />
            <Button label={label} action={action} />
        </div>
    )
}

export default ImageButton