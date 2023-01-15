import { Injectable } from '@angular/core';
import {THE_MOVIE_DB_POSTER_BASE_URL} from "../../app.constants";


export class ThemoviedbAssetsHelper {

    static getPosterImageFullUrlFromPath(path: string): string {
        return `${THE_MOVIE_DB_POSTER_BASE_URL}/${path}`;
    }

}
