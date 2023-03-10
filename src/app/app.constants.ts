
export const THE_MOVIE_DB_API_BASE_URL = 'https://api.themoviedb.org/3';
export const THE_MOVIE_DB_API_KEY = 'ef2ceec09ac43a58291e9fd5f57dc25a';
export const THE_MOVIE_DB_LANGAUGE = 'fr';
export const THE_MOVIE_DB_POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const APP_DOMAINE_PATH = 'mdb';

export const APP_MAIN_ROUTES = {
    HOME: 'home',
    POPULAR_MOVIES: 'popular-movies',
    SEARCH_MOVIES: 'search-movies',
    SEARCH_MOVIES_WITH_VARIABLE_PATH: 'search-movies/:searchInput',
    MOVIE_DETAILS: 'movie-details/:movieId',
    APP_ERROR: 'error',
    NOT_FOUND_ERROR: 'not-found',
}

export const APP_NAVIGATIONS_ROUTES = {
    HOME: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.HOME}`,
    POPULAR_MOVIES: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.POPULAR_MOVIES}`,
    SEARCH_MOVIES: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.SEARCH_MOVIES}`,
    SEARCH_MOVIES_WITH_VARIABLE_PATH: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.SEARCH_MOVIES_WITH_VARIABLE_PATH}`,
    MOVIE_DETAILS: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.MOVIE_DETAILS}`,
    APP_ERROR: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.APP_ERROR}`,
    NOT_FOUND_ERROR: `${APP_DOMAINE_PATH}/${APP_MAIN_ROUTES.NOT_FOUND_ERROR}`,
}
