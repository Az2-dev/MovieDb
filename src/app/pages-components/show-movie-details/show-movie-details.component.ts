import {Component, OnInit} from '@angular/core';
import {MovieDetailsDto} from "../../core/models/movie-details.dto";
import {ThemoviedbBusinessService} from "../../core/business-services/themoviedb-business.service";
import {ActivatedRoute, Router} from "@angular/router";
import {APP_NAVIGATIONS_ROUTES} from "../../app.constants";
import {MovieVideosDto} from "../../core/models/movie-videos.dto";

@Component({
    selector: 'app-show-movie-details',
    templateUrl: './show-movie-details.component.html',
    styleUrls: ['./show-movie-details.component.scss']
})
export class ShowMovieDetailsComponent implements OnInit {


    loaded: boolean = false;
    movieId: number | undefined;
    movieDetails: MovieDetailsDto | undefined;
    movieVideos: MovieVideosDto | undefined;

    constructor(
        private themoviedbBusinessService: ThemoviedbBusinessService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.loaded = false;
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.movieId = Number(paramMap.get('movieId')) ?? undefined;
            if (this.movieId) {
                this.themoviedbBusinessService.getMovieDetailsById(this.movieId).subscribe(
                    result => {
                        this.movieDetails = result;
                        this.themoviedbBusinessService.getMovieVideoById(this.movieId!).subscribe(
                            videosResult => {
                                this.movieVideos = videosResult;
                                console.table(this.movieVideos);
                                this.loaded = true;
                            },
                            error => {
                                this.loaded = true;
                            },
                        );
                        this.loaded = true;
                    },
                    error => {
                        this.router.navigate([APP_NAVIGATIONS_ROUTES.NOT_FOUND_ERROR]);
                    }
                );
            } else {
                this.router.navigate([APP_NAVIGATIONS_ROUTES.NOT_FOUND_ERROR]);
            }
        });
    }

}
