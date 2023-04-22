import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/animations';

@Component({
	selector: 'app-page-main',
	templateUrl: './page-main.component.html',
	styleUrls: ['./page-main.component.scss'],
})
export class PageMainComponent implements OnInit {

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {

	}
}
