import {Component, OnInit} from '@angular/core';
import {MoviesItemsDto} from "../../core/models/movies-items.dto";
import {ThemoviedbBusinessService} from "../../core/business-services/themoviedb-business.service";
import {Router} from "@angular/router";
import {APP_NAVIGATIONS_ROUTES} from "../../app.constants";
import {PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-popular-movies',
    templateUrl: './popular-movies.component.html',
    styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

    loaded: boolean = false;
    pageIndex: number = 1;
    popularMovies: MoviesItemsDto = {} as MoviesItemsDto;

    constructor(
        private themoviedbBusinessService: ThemoviedbBusinessService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.setPopularMoviesWithPageNumber(1);
    }

    setPopularMoviesWithPageNumber(pageNumber: number): void {
        this.loaded = false;
        this.pageIndex = pageNumber;
        this.themoviedbBusinessService.getPopularMoviesByPageNumber(this.pageIndex).subscribe(
            result => {
                this.popularMovies = result;
                setTimeout(() => {
                    this.loaded = true;
                }, 1000);
            },
            error => {
                this.router.navigate([APP_NAVIGATIONS_ROUTES.APP_ERROR]);
            }
        );
    }

}
