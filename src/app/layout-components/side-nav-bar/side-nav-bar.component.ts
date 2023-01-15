import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {APP_NAVIGATIONS_ROUTES} from "../../app.constants";

@Component({
    selector: 'app-side-nav-bar',
    templateUrl: './side-nav-bar.component.html',
    styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    onClickNavigateToHomeBtnHandler() {
        this.router.navigate([
            APP_NAVIGATIONS_ROUTES.HOME
        ]);
    }

    onClickNavigateToPopularMoviesBtnHandler() {
        this.router.navigate([
            APP_NAVIGATIONS_ROUTES.POPULAR_MOVIES
        ]);
    }

}
