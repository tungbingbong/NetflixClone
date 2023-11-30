import { useState } from 'react';
import '../CSS/MoviePoster.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function MoviePoster({ baseUrl, movie }) {
    const [isHover, setIsHover] = useState(false);
    const [delayHandler, setDelayHandler] = useState();

    const handleMouseEnter = () => {
        setDelayHandler(
            setTimeout(() => {
                setIsHover(true);
            }, 800),
        );
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setIsHover(false);
    };

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + ' ...' : str;
    }

    return (
        <div className="movie-posters" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <div
                className={isHover ? 'movie-backdrop' : 'movie-img'}
                style={{ backgroundImage: `url(${baseUrl}${isHover ? movie.backdrop_path : movie.poster_path})` }}
            ></div>
            <div className="poster-info">
                <div className="poster-title">{truncate(movie.title || movie.name || movie.original_name, 25)}</div>
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
                <ul>
                    <li>
                        <span>Action</span>
                    </li>
                    <li>
                        <span>Horror</span>
                    </li>
                    <li>
                        <span>Comedy</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MoviePoster;
