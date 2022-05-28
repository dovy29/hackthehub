import React from 'react'

function Icon({ name, color = '#c4c4c4' }) {
    return (
        <i className={`fas fa-${name}`} style={{ color: color }}></i>
    )
}

export default Icon