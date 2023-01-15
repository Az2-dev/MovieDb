import {Component, Input, OnInit} from '@angular/core';
import {MovieItemDto} from "../../../core/models/movie-item.dto";
import {ThemoviedbAssetsHelper} from "../../../core/helper/themoviedb-assets-helper";
import {Router} from "@angular/router";
import {APP_NAVIGATIONS_ROUTES} from "../../../app.constants";

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

    @Input() movieItem: MovieItemDto = {} as MovieItemDto;

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    get posterUrl(): string {
        if (this.movieItem && this.movieItem.poster_path) {
            return ThemoviedbAssetsHelper.getPosterImageFullUrlFromPath(this.movieItem.poster_path);
        } else {
            return '';
        }
    }

    onClickShowMovieDetailsBtnHandler() {
        this.router.navigate([
            APP_NAVIGATIONS_ROUTES.MOVIE_DETAILS.replace(':movieId', String(this.movieItem.id))
        ]);
    }

    addToFavoris(id: number) {
        console.log(id);
    }
}
