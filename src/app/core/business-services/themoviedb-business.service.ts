import {Injectable} from '@angular/core';
import {ThemoviedbHttpClientService} from "../rest-api-client/themoviedb-http-client.service";
import {map, Observable} from "rxjs";
import {MoviesItemsDto} from "../models/movies-items.dto";
import {MovieDetailsDto} from "../models/movie-details.dto";
import {MovieVideosDto} from "../models/movie-videos.dto";

@Injectable({
    providedIn: 'root'
})
export class ThemoviedbBusinessService {

    constructor(
        private themoviedbHttpClientService: ThemoviedbHttpClientService
    ) {
    }

    getPopularMoviesByPageNumber(pageNumber: number): Observable<MoviesItemsDto> {
        const params = new Map([
            ['page', `${pageNumber}`],
        ]);
        return this.themoviedbHttpClientService.fetchDataBySubUriAndParameters(
            'movie/popular',
            params
        ).pipe(map(
            response => response as MoviesItemsDto
        ));
    }

    searchMoviesByPageNumber(searchInput: string, pageNumber: number): Observable<MoviesItemsDto> {
        const params = new Map([
            ['page', `${pageNumber}`],
            ['query', `${searchInput}`],
        ]);
        return this.themoviedbHttpClientService.fetchDataBySubUriAndParameters(
            'search/movie',
            params
        ).pipe(map(
            response => response as MoviesItemsDto
        ));

    }

    getMovieDetailsById(movieId: number): Observable<MovieDetailsDto> {
        return this.themoviedbHttpClientService.fetchDataBySubUriAndParameters(
            `movie/${movieId}`
        ).pipe(map(
            response => response as MovieDetailsDto
        ));

    }

    getMovieVideoById(movieId: number): Observable<MovieVideosDto> {
        return this.themoviedbHttpClientService.fetchDataBySubUriAndParameters(
            `movie/${movieId}/videos`
        ).pipe(map(
            response => response as MovieVideosDto
        ));
    }



}
