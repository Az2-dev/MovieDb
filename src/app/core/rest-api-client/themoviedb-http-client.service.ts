import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {THE_MOVIE_DB_API_BASE_URL, THE_MOVIE_DB_API_KEY, THE_MOVIE_DB_LANGAUGE} from "../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class ThemoviedbHttpClientService {

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    fetchDataBySubUriAndParameters(
        subUri: string,
        parameters?: Map<string, string>
    ): Observable<any> {
        let parametersUrlQuery = '';
        if (parameters) {
            parameters.forEach((value, key) => {
                parametersUrlQuery += `&${key}=${value}`;
            });
        }
        const url = `${THE_MOVIE_DB_API_BASE_URL}/${subUri}?api_key=${THE_MOVIE_DB_API_KEY}${parametersUrlQuery}&language=${THE_MOVIE_DB_LANGAUGE}`;
        return this.httpClient.get(url);
    }

}
