import { animate, query, style, transition, trigger, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':enter, :leave', [
			style({
				position: 'absolute',
				left: 0,
				width: '100%',
				opacity: 0,
			})
		]),
		query(':enter', [
			animate('600ms ease',
				style({ opacity: 1 })
			)
		])
	])
]);

// export const slider = trigger('routeAnimations', [
// 	transition('* => isLeft', slideTo('left')),
// 	transition('* => isRight', slideTo('right')),
// 	transition('isRight => *', slideTo('left')),
// 	transition('isLeft => *', slideTo('right'))
// ]);

// function slideTo(direction: 'left' | 'right') {
// 	const optional = { optional: true };
// 	return [
// 		query(':enter, :leave', [
// 			style({
// 				// position: 'absolute',
// 				// top: 0,
// 				// [direction]: 0,
// 				// width: '100%'
// 				opacity: 0
// 			})
// 		], optional),
// 		query(':enter', [
// 			style({ opacity: 0 } )
// 		]),
// 		group([
// 			query(':leave', [
// 				animate('600ms ease', style({ [direction]: '100%' }))
// 			])
// 		])
// 	];
// }
