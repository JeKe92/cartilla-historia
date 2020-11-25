import React from 'react';
import './FilterSection.css';

export const FilterSection = () => {
    return (
        <section className="filter-section">
            <input className="form-control search" type="search" placeholder="Buscar" />
            <button type="button" className="btn btn-terciary"><i className="fas fa-plus"></i> Nueva</button>
        </section>
    )
}
