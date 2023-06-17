import {animate, state, style, transition, trigger} from "@angular/animations";

export const animateSideMenu = trigger('animateSideMenu', [
  state(
    'scrollLeft',
    style({
      transform: 'translateX(-10%)',
      // opacity: 1
    })
  ),
  state(
    'scrollRight',
    style({
      transform: 'translateX(-50%)',
      // opacity: 0
    })
  ),

  transition('scrollLeft => scrollRight', [animate('300ms ease-out')]),

  transition('scrollRight => scrollLeft', [animate('300ms ease-in')]),
]);
