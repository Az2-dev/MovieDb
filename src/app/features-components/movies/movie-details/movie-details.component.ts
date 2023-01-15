import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MovieDetailsDto} from "../../../core/models/movie-details.dto";
import {ThemoviedbAssetsHelper} from "../../../core/helper/themoviedb-assets-helper";
import {MovieVideosDto} from "../../../core/models/movie-videos.dto";
import {MovieVideoItemDto} from "../../../core/models/movie-video-item.dto";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";




@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnChanges {

    @Input() movieDetails: MovieDetailsDto | undefined;
    @Input() movieVideos: MovieVideosDto | undefined;

    countLike=68;
    countDislike=90;

    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {

    }


    ngOnChanges(changes: SimpleChanges): void {
        console.table(this.movieVideos);
        console.table(this.movieVideos?.results);
        this.movieVideos?.results.forEach(movieVideoItem => {
            movieVideoItem.videoUrl = this.getVideoUrlById(movieVideoItem.key);
        });
    }

    get posterUrl(): string {
        if (this.movieDetails) {
            return ThemoviedbAssetsHelper.getPosterImageFullUrlFromPath(this.movieDetails.poster_path);
        } else {
            return '';
        }
    }

    get movieVideosItems(): MovieVideoItemDto[] {
        if (this.movieVideos && this.movieVideos.results) {
            return this.movieVideos.results.filter(mvi => mvi.videoUrl);
        } else {
            return [];
        }
    }

    onClickShowMovieHomepageBtnHandler() {
        if (this.movieDetails && this.movieDetails.homepage) {
            window.open(this.movieDetails.homepage, '_blank');
        }
    }

    onClickSearchMovieInGoogleBtnHandler() {
        if (this.movieDetails && this.movieDetails.original_title) {
            window.open(
                `https://www.google.com/search?q=${this.movieDetails.original_title}`,
                '_blank'
            );
        }
    }


    private getVideoUrlById(videoId: string): SafeResourceUrl | undefined {
        if (videoId) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`)
        } else {
            return undefined;
        }
    }

}

