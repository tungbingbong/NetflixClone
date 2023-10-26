/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo } from 'react';
import axios from '../axios';
import '../CSS/Row.css';
import SkeletonPoster from '../skeletons/SkeletonPoster';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState({
        loading: true,
        data: [],
    });

    // load movies when row render
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies({
                loading: false,
                data: request.data.results,
            });
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {!movies.loading
                    ? movies.data.map((movie) => (
                          <React.Fragment key={movie.id}>
                              <img
                                  className={`row_poster ${isLarge && 'row_posterLarge'}`}
                                  src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                                  alt={movie.name}
                              />
                              <p className="movie_row_name">
                                  {movie.name || movie.original_title || movie.original_name}
                              </p>
                          </React.Fragment>
                      ))
                    : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonPoster key={n} />)}
            </div>
        </div>
    );
}

export default memo(Row);
