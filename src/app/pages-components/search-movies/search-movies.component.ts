import {Component, OnInit} from '@angular/core';
import {MoviesItemsDto} from "../../core/models/movies-items.dto";
import {APP_NAVIGATIONS_ROUTES} from "../../app.constants";
import {ThemoviedbBusinessService} from "../../core/business-services/themoviedb-business.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-search-movies',
    templateUrl: './search-movies.component.html',
    styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

    loaded: boolean = false;
    searchInput: string | undefined | null;
    pageIndex: number = 1;
    searchedMovies: MoviesItemsDto = {} as MoviesItemsDto;

    constructor(
        private themoviedbBusinessService: ThemoviedbBusinessService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.loaded = false;
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.searchInput = String(paramMap.get('searchInput') ?? '');
            this.setSearchedMoviesWithPageNumber(1);
        });
    }

    setSearchedMoviesWithPageNumber(pageNumber: number): void {
        this.loaded = false;
        this.pageIndex = pageNumber;
        this.getMoviesRecordingToParameters().subscribe(
            result => {
                this.searchedMovies = result;
                setTimeout(() => {
                    this.loaded = true;
                }, 1000);
            },
            error => {
                this.router.navigate([APP_NAVIGATIONS_ROUTES.APP_ERROR]);
            }
        );
    }

    private getMoviesRecordingToParameters(): Observable<MoviesItemsDto> {
        if (this.searchInput) {
            return this.themoviedbBusinessService.searchMoviesByPageNumber(this.searchInput, this.pageIndex);
        } else {
            return this.themoviedbBusinessService.getPopularMoviesByPageNumber( this.pageIndex);
        }
    }

}
