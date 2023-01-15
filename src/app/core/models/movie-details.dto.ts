import {MovieCategoryDto} from "./movie-category.dto";
import {ProductionCompanyDto} from "./production-company.dto";
import {ProductionCountryDto} from "./production-country.dto";
import {SpokenLanguageDto} from "./spoken-language.dto";

export interface MovieDetailsDto {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: MovieCategoryDto[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanyDto[];
    production_countries: ProductionCountryDto[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguageDto[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
