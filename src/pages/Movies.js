import { useEffect } from 'react';
import Row from '../components/Row';
import requests from '../request';
import Banner from '../components/Banner';
import AnimatedPage from '../components/AnimatedPage';

function Movies({ title }) {
    useEffect(() => {
        document.title = title;
    });

    return (
        <AnimatedPage>
            <div>
                <Banner
                    fetchBannerData={requests.fetchActionMovies}
                    fetchCategories={requests.fetchMoviesGenres}
                    type={'movies'}
                />
                <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} isLarge />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarge />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarge />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarge />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLarge />
            </div>
        </AnimatedPage>
    );
}

export default Movies;
