import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {APP_NAVIGATIONS_ROUTES} from "../../app.constants";
import {ThemoviedbHttpClientService} from "../../core/rest-api-client/themoviedb-http-client.service";


@Component({
    selector: 'app-top-nav-bar',
    templateUrl: './top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

    @Output() toggleSideNavBarBtnOutputEmitter = new EventEmitter<any>();

    searchInput: string | undefined | null;
    movies: Array<any> = [];

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.movies = [];
    }

    onClickToggleSideNavBarBtnHandler(): void {
        this.toggleSideNavBarBtnOutputEmitter.emit();
    }

    onClickHomeBtnHandler() {
        this.router.navigate([
            APP_NAVIGATIONS_ROUTES.HOME
        ]);
    }

    onClickPopularMoviesBtnHandler() {
        this.router.navigate([
            APP_NAVIGATIONS_ROUTES.POPULAR_MOVIES
        ]);
    }

    onClickSearchMovieByName() {
        if (this.searchInput) {
            this.router.navigate([APP_NAVIGATIONS_ROUTES.SEARCH_MOVIES_WITH_VARIABLE_PATH.replace(':searchInput', this.searchInput)]);
        } else {
            this.router.navigate([APP_NAVIGATIONS_ROUTES.SEARCH_MOVIES]);
        }
    }
}
