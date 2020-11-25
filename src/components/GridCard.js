import React from 'react';
import { GridItemCard } from './GridItemCard';

import './GridCard.css';

export const GridCard = () => {

    const cards = [{
        _id: '123',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '456',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '789',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '101',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '153',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '458',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '788',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    },
    {
        _id: '102',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis ipsa neque temporibus accusantium maxime minus itaque illum blanditiis distinctio.',
        source: 'Creeme wey'
    }];

    return (
        <section className="grid-card">
            { cards.map( (card) => (
                <GridItemCard key={card._id} {...card} />
            )) }
        </section>
    )
}
