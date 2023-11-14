import { memo, useEffect } from 'react';
import Row from '../components/Row';
import requests from '../request';
import Banner from '../components/Banner';
import AnimatedPage from '../components/AnimatedPage';

function Home({ title }) {
    useEffect(() => {
        document.title = title;
    });
    return (
        <AnimatedPage>
            <div>
                <Banner fetchBannerData={requests.fetchTrending} />
                <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLarge />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarge />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarge />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarge />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarge />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLarge />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLarge />
            </div>
        </AnimatedPage>
    );
}

export default memo(Home);
