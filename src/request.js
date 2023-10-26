const API_KEY = '7c568e20d652059139d25af05c85690f';
console.log(process.env);

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTVAction: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10759`,
    fetchTVComedy: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    fetchTVAnimation: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTVLatest: `/tv/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;
