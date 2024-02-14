import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question-first',
  templateUrl: './question-first.component.html',
  styleUrls: ['./question-first.component.css'],
  animations: [
    trigger('moveButton', [
      state('initial', style({
        transform: 'translate(0, 0)'
      })),
      state('moved', style({
        transform: 'translate({{ x }}px, {{ y }}px)'
      }), { params: { x: 0, y: 0 } }),
      transition('initial => moved', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class QuestionFirstComponent {

  buttonState: string = 'initial';
  x: number = 0;
  y: number = 0;

  constructor() { }

  moveButtonNo() {
    this.x = Math.random() * 400;
    this.y = Math.random() * 400;
    this.buttonState = 'moved'
  }


}
