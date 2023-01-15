import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

    sideNaveOpened: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleSideNavBarBtnOutputEmitterHandler($event: any, drawer: any): void {
        drawer.toggle();
        this.sideNaveOpened = !this.sideNaveOpened;
    }

}
