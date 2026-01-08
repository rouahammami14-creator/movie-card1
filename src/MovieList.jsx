import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <Moviecard
                    movie={movie}
                />
            ))}
        </div>
    )
}

export default MovieList
