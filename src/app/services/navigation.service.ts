import { Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationErrorRouteService {
	private prevUrl: string = '';
	private prevUrl$ = 	this.router.events
	.pipe(
		filter(event => event instanceof Scroll),
		tap((event: any) => {
			this.prevUrl = event.routerEvent.url;
		})
	);

  constructor(private router: Router) {
		this.prevUrl$.subscribe();
	}

	public getPreviousUrl(): string {
    return this.prevUrl;
  }
}
