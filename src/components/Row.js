/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo, useRef } from 'react';
import axios from '../axios';
import '../CSS/Row.css';
import SkeletonPoster from '../skeletons/SkeletonPoster';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MoviePoster from './MoviePoster';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Row({ title, fetchUrl, isLarge }) {
    const listRef = useRef();
    const [slideNum, setSlideNum] = useState(0);
    const [isMovedLeft, setIsMovedLeft] = useState(false);
    const [IsMovedRight, setIsMovedRight] = useState(false);

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
    }, [fetchUrl]);

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 60;
        if (direction === 'left' && slideNum > 0) {
            setIsMovedRight(false);
            if (slideNum > 10) {
                setSlideNum(slideNum - 5);
                listRef.current.style.transform = `translateX(${1140 + distance}px)`;
            } else {
                setIsMovedLeft(false);
                setSlideNum(slideNum - 5);
                listRef.current.style.transform = `translateX(${1330 + distance}px)`;
            }
        }
        if (direction === 'right' && slideNum < 10) {
            setIsMovedLeft(true);
            if (slideNum < 5) {
                setSlideNum(slideNum + 5);
                listRef.current.style.transform = `translateX(${-1330 + distance}px)`;
            } else {
                setIsMovedRight(true);
                setSlideNum(slideNum + 5);
                listRef.current.style.transform = `translateX(${-1140 + distance}px)`;
            }
        }
    };

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <ArrowBackIosNewOutlinedIcon
                sx={{ fontSize: '3.5vw', height: '18.5vw' }}
                className="slider left"
                onClick={() => handleClick('left')}
                style={{ display: !isMovedLeft && 'none' }}
            />
            <div className="row_posters" ref={listRef}>
                {!movies.loading
                    ? movies.data.map((movie) => (
                          <React.Fragment key={movie.id}>
                              <MoviePoster baseUrl={baseUrl} isLarge={isLarge} movie={movie} />
                          </React.Fragment>
                      ))
                    : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonPoster key={n} />)}
            </div>
            <ArrowForwardIosOutlinedIcon
                sx={{ fontSize: '3.5vw', height: '18.5vw' }}
                className="slider right"
                onClick={() => handleClick('right')}
                style={{ display: IsMovedRight && 'none' }}
            />
        </div>
    );
}

export default memo(Row);
