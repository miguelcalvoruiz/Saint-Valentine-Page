import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-puzzle-piece',
  templateUrl: './puzzle-piece.component.html',
  styleUrls: ['./puzzle-piece.component.css']
})
export class PuzzlePieceComponent {
  @Input() piece: any;
  @Output() pieceClicked = new EventEmitter<any>();

  onClick() {
    this.pieceClicked.emit(this.piece);
  }
}
