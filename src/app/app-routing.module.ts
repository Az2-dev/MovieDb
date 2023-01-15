import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from "./layout-components/main-container/main-container.component";
import {HomeComponent} from "./pages-components/home/home.component";
import {NotFoundErrorComponent} from "./pages-components/not-found-error/not-found-error.component";
import {PopularMoviesComponent} from "./pages-components/popular-movies/popular-movies.component";
import {ShowMovieDetailsComponent} from "./pages-components/show-movie-details/show-movie-details.component";
import {APP_DOMAINE_PATH, APP_MAIN_ROUTES, APP_NAVIGATIONS_ROUTES} from "./app.constants";
import {SearchMoviesComponent} from "./pages-components/search-movies/search-movies.component";

const routes: Routes = [
    {path: '', redirectTo: APP_DOMAINE_PATH, pathMatch: 'full'},
    {
        path: APP_DOMAINE_PATH,
        component: MainContainerComponent,
        children: [
            {path: '', redirectTo: APP_MAIN_ROUTES.HOME, pathMatch: 'full'},
            {path: APP_MAIN_ROUTES.HOME, component: HomeComponent},
            {path: APP_MAIN_ROUTES.POPULAR_MOVIES, component: PopularMoviesComponent},
            {path: APP_MAIN_ROUTES.SEARCH_MOVIES, component: SearchMoviesComponent},
            {path: APP_MAIN_ROUTES.SEARCH_MOVIES_WITH_VARIABLE_PATH, component: SearchMoviesComponent},
            {path: APP_MAIN_ROUTES.MOVIE_DETAILS, component: ShowMovieDetailsComponent},
            {path: APP_MAIN_ROUTES.NOT_FOUND_ERROR, component: NotFoundErrorComponent},
        ]
    },
    {path: '**', redirectTo: `${APP_NAVIGATIONS_ROUTES.NOT_FOUND_ERROR}`, pathMatch: 'full'},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
