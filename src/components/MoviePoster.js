import { useState } from 'react';
import '../CSS/MoviePoster.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function MoviePoster({ baseUrl, movie }) {
    const [isHover, setIsHover] = useState(false);
    const [delayHandler, setDelayHandler] = useState(null);

    const handleMouseEnter = () => {
        setDelayHandler(
            setTimeout(() => {
                setIsHover(true);
            }, 1000),
        );
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setIsHover(false);
    };

    return (
        <div className="movie-posters" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <div
                className={isHover ? 'movie-backdrop' : 'movie-img'}
                style={{ backgroundImage: `url(${baseUrl}${isHover ? movie.backdrop_path : movie.poster_path})` }}
            ></div>
            <div className="poster-info">
                <div className="poster-icons">
                    <PlayCircleIcon className="poster-icon" />
                    <AddCircleOutlineIcon className="poster-icon" />
                    <RecommendOutlinedIcon className="poster-icon" />
                    <RecommendOutlinedIcon sx={{ transform: 'scale(-1, -1)' }} className="poster-icon" />
                </div>
            </div>
            <div className="poster-info-top">
                <span>1 hour 14 mins</span>
                <span className="limit">16+</span>
                <span>1 Season</span>
            </div>
            <div className="poster-genres">
                <span>Action</span>
            </div>
        </div>
    );
}

export default MoviePoster;
