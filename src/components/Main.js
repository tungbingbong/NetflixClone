import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TVShows from '../pages/TVShows';
import Movies from '../pages/Movies';
import ScrollToTop from '../components/ScrollToTop';

function Main() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/" element={<Home title="Home - Netflix" />} />
                <Route path="/tvshows" element={<TVShows title="TVShows - Netflix" />} />
                <Route path="/movies" element={<Movies title="Movies - Netflix" />} />
            </Routes>
        </ScrollToTop>
    );
}

export default Main;
