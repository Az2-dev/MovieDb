import {MovieVideoItemDto} from "./movie-video-item.dto";

export interface MovieVideosDto {
    id: number;
    results: MovieVideoItemDto[];
}
