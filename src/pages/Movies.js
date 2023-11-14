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
                <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            </div>
        </AnimatedPage>
    );
}

export default Movies;
