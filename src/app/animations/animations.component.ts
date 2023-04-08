import { Component } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animations',
  template: `
    <button [@myTrigger]="state" (click)="toggleState()">Hello</button>
    <button (click)="addItem()">Add Item</button>
    <button (click)="deleteItem()">Delete Item</button>
    <ul [@listTrigger]="list.length">
         <li *ngFor="let item of list">
            {{item.name}}
        </li>
    </ul>
  `,
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.4)',
      })),
      state('extra-large', style({
        transform: 'scale(2)',
      })),
      // transition('small => large',
      //   animate('500ms ease-in')),
      // transition('large => small',
      //   animate('500ms ease-in')),

      //transition('large <=> small', animate('500ms'))
      // transition('* <=> small', animate('500ms'))
      transition('* <=> *', animate('500ms'))
    ]),
    // trigger('listTrigger', [
    //   state('fadeIn', style({opacity: 1})),
    //   transition('void => *', [
    //     style({
    //       opacity: 0,
    //       transform: 'translateY(20px)'
    //     }),
    //     animate('500ms'),
    //   ])
    // ]),
    trigger('listTrigger', [
      transition('* <=> *', [
        // state('fadeIn', style({opacity: 1})),
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateX(-200px)'
          }),
          stagger('150ms', [
            animate('300ms', style({
              opacity: 1,
              transform: 'translateX(0px)'
            })),
          ]),
        ], { optional: true }),
        query(':leave', [
          style({
            opacity: 1,
            transform: 'translateX(0)'
          }),
          stagger('150ms', [
            animate('300ms', style({
              opacity: 0,
              transform: 'translateX(-200px)'
            })),
          ]),
        ], { optional: true })
      ])
    ]),
  ],
})
export class AnimationsComponent {
  state = 'small';
  newState = 'fadeIn';

  list = [{
    name: 'roger'
  },{
    name: 'geoff'
  },{
    name: 'bobby'
  }]

  toggleState(): void {
    this.state = (this.state === 'small' ) ? 'large' : 'small';
  }

  addItem() {
    this.list.push({
      name: 'arnold',
    });
  }

  deleteItem() {
    this.list.pop();
  }
}
