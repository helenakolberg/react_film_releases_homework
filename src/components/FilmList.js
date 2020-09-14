import React, { Component } from 'react';
import Film from './Film.js';

class FilmList extends Component {
    render() {
        const filmItems = this.props.films.map((film) => {
            return <Film key={film.id} name={film.name} url={film.url} />
        });

        return (
            <>
                <h2>New Films | Coming Soon</h2>
                {filmItems}
            </>
        );
    }
}

export default FilmList;