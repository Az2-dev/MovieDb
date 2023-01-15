import {MovieItemDto} from "./movie-item.dto";

export interface MoviesItemsDto {
    page:          number;
    results:       MovieItemDto[];
    total_pages:   number;
    total_results: number;
}
