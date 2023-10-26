import React, { useEffect } from 'react';
import Row from '../components/Row';
import requests from '../request';
import Banner from '../components/Banner';
import AnimatedPage from '../components/AnimatedPage';

function TvShows({ title }) {
    useEffect(() => {
        document.title = title;
    });

    return (
        <AnimatedPage>
            <div>
                <Banner fetchBannerData={requests.fetchTVAnimation} />
                <Row title="TV Shows Original" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="TV Shows Action" fetchUrl={requests.fetchTVAction} />
                <Row title="TV Shows Animation" fetchUrl={requests.fetchTVAnimation} />
                <Row title="TV Shows Comedy" fetchUrl={requests.fetchTVComedy} />
            </div>
        </AnimatedPage>
    );
}

export default TvShows;
