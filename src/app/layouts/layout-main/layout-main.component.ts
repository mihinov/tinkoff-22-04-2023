import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
	animations: [fadeInAnimation]
})
export class LayoutMainComponent {
	constructor() {}
}
