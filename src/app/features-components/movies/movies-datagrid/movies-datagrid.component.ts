import {Component, Input, OnInit} from '@angular/core';
import {MoviesItemsDto} from "../../../core/models/movies-items.dto";

@Component({
    selector: 'app-movies-datagrid',
    templateUrl: './movies-datagrid.component.html',
    styleUrls: ['./movies-datagrid.component.scss']
})
export class MoviesDatagridComponent implements OnInit {

    @Input() movies: MoviesItemsDto = {} as MoviesItemsDto;

    constructor() {
    }

    ngOnInit(): void {
    }

}
