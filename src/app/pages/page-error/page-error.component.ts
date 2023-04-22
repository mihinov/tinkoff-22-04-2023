import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import { NavigationErrorRouteService } from 'src/app/services/navigation.service';

@UntilDestroy()
@Component({
	selector: 'app-page-error',
	templateUrl: './page-error.component.html',
	styleUrls: ['./page-error.component.scss'],
})
export class PageErrorComponent implements OnInit {
	private readonly secondsLeftConst: number = 5;

	public secondsLeft = this.secondsLeftConst;
	public lastUrl: string = '';
	public countDown$: Observable<number> = interval(1000).pipe(
		map((value) => this.secondsLeftConst - value - 1),
		takeWhile((value) => value >= 0),
		tap(count => {
			this.secondsLeft = count;
			if (count === 0) {
				this.router.navigate(['/'], { queryParamsHandling: 'preserve', preserveFragment: true});
			}
		}),
		untilDestroyed(this)
	);

	constructor(
		private router: Router,
		private navigationErrorRouteService: NavigationErrorRouteService
	) {
	}

	ngOnInit(): void {
		this.countDown$.subscribe();
		setTimeout(() => {
			const prevUrl = this.navigationErrorRouteService.getPreviousUrl();
			const host = window.location.host;

			this.lastUrl = `${host}${prevUrl}`;
		}, 0)
	}
}
