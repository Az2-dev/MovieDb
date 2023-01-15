import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages-components/home/home.component';
import {MainContainerComponent} from './layout-components/main-container/main-container.component';
import {SideNavBarComponent} from './layout-components/side-nav-bar/side-nav-bar.component';
import {TopNavBarComponent} from './layout-components/top-nav-bar/top-nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NotFoundErrorComponent} from './pages-components/not-found-error/not-found-error.component';
import {MatButtonModule} from "@angular/material/button";
import {MovieDetailsComponent} from './features-components/movies/movie-details/movie-details.component';
import {MoviesDatagridComponent} from './features-components/movies/movies-datagrid/movies-datagrid.component';
import {MovieItemComponent} from './features-components/movies/movie-item/movie-item.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {PopularMoviesComponent} from './pages-components/popular-movies/popular-movies.component';
import {ShowMovieDetailsComponent} from './pages-components/show-movie-details/show-movie-details.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ErrorComponent} from './pages-components/error/error.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SectionHeaderTitleComponent } from './shared/components/section-header-title/section-header-title.component';
import {MatCarouselModule} from "ng-mat-carousel";
import {FormsModule} from "@angular/forms";
import { SearchMoviesComponent } from './pages-components/search-movies/search-movies.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import {AuthButtonComponent} from './pages-components/auth-button/auth-button.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundErrorComponent,
        MainContainerComponent,
        SideNavBarComponent,
        TopNavBarComponent,
        MovieDetailsComponent,
        MoviesDatagridComponent,
        MovieItemComponent,
        PopularMoviesComponent,
        ShowMovieDetailsComponent,
        ErrorComponent,
        SectionHeaderTitleComponent,
        SearchMoviesComponent,
        AuthButtonComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatCarouselModule.forRoot(),
        FormsModule,

        // Import the module into the application, with configuration
        AuthModule.forRoot({
            domain: 'dev-l6avw87yby81jxom.us.auth0.com',
            clientId: 'BpSNMpUEGhalbNlAdAsCE2rWtGmW47ry'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
