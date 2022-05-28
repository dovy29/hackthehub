import React from 'react';
import Button from '../form/inputs/Button';

function MenuItem({ label }) {
    return (
        <div>
            <Button {...label} />
        </div>
    )
}

export default MenuItem