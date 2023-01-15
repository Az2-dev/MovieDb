import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-header-title',
    templateUrl: './section-header-title.component.html',
    styleUrls: ['./section-header-title.component.scss']
})
export class SectionHeaderTitleComponent implements OnInit {

    @Input() sectionTitle: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

}
