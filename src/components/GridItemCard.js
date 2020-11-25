import React from 'react';
import './GridItemCard.css';

export const GridItemCard = ({title, description, source}) => {
    return (
        <blockquote className="grid-item-card mt-3">
            <h3>{title}</h3>
            <p>{description}</p>
            <cite>Fuente: {source}</cite>
        </blockquote>
    )
}
