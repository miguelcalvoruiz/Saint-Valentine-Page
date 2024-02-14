import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';

@Component({
  selector: 'app-puzzle-board',
  templateUrl: './puzzle-board.component.html',
  styleUrls: ['./puzzle-board.component.css']
})
export class PuzzleBoardComponent implements OnInit {
  pieces: any[] = [];
  selectedPiece: any = null;
  correctCount: number = 0;
  initialPositions: any[] = [
    { x: 3, y: 6, piece: '00.jpeg' },
    { x: 1, y: 8, piece: '01.jpeg' },
    { x: 6, y: 2, piece: '02.jpeg' },
    { x: 5, y: 7, piece: '03.jpeg' },
    { x: 2, y: 2, piece: '04.jpeg' },
    { x: 6, y: 6, piece: '05.jpeg' },
    { x: 4, y: 3, piece: '06.jpeg' },
    { x: 1, y: 1, piece: '07.jpeg' },
    { x: 4, y: 5, piece: '08.jpeg' },
    { x: 1, y: 3, piece: '09.jpeg' },
    { x: 3, y: 5, piece: '10.jpeg' },
    { x: 5, y: 1, piece: '11.jpeg' },
    { x: 6, y: 4, piece: '12.jpeg' },
    { x: 2, y: 3, piece: '13.jpeg' },
    { x: 4, y: 7, piece: '14.jpeg' },
    { x: 1, y: 6, piece: '15.jpeg' },
    { x: 2, y: 1, piece: '16.jpeg' },
    { x: 6, y: 8, piece: '17.jpeg' },
    { x: 1, y: 4, piece: '18.jpeg' },
    { x: 6, y: 7, piece: '19.jpeg' },
    { x: 2, y: 5, piece: '20.jpeg' },
    { x: 6, y: 1, piece: '21.jpeg' },
    { x: 5, y: 4, piece: '22.jpeg' },
    { x: 3, y: 8, piece: '23.jpeg' },
    { x: 3, y: 2, piece: '24.jpeg' },
    { x: 4, y: 8, piece: '25.jpeg' },
    { x: 4, y: 2, piece: '26.jpeg' },
    { x: 3, y: 1, piece: '27.jpeg' },
    { x: 2, y: 7, piece: '28.jpeg' },
    { x: 5, y: 5, piece: '29.jpeg' },
    { x: 4, y: 6, piece: '30.jpeg' },
    { x: 2, y: 4, piece: '31.jpeg' },
    { x: 1, y: 2, piece: '32.jpeg' },
    { x: 6, y: 3, piece: '33.jpeg' },
    { x: 3, y: 7, piece: '34.jpeg' },
    { x: 5, y: 2, piece: '35.jpeg' },
    { x: 4, y: 1, piece: '36.jpeg' },
    { x: 2, y: 8, piece: '37.jpeg' },
    { x: 1, y: 5, piece: '38.jpeg' },
    { x: 5, y: 3, piece: '39.jpeg' },
    { x: 3, y: 3, piece: '40.jpeg' },
    { x: 5, y: 6, piece: '41.jpeg' },
    { x: 4, y: 4, piece: '42.jpeg' },
    { x: 2, y: 6, piece: '43.jpeg' },
    { x: 1, y: 7, piece: '44.jpeg' },
    { x: 6, y: 5, piece: '45.jpeg' },
    { x: 3, y: 4, piece: '46.jpeg' },
    { x: 5, y: 8, piece: '47.jpeg' }
  ];

  correctPositions: any[] = [
    { x: 1, y: 1, piece: '00.jpeg' },
    { x: 1, y: 2, piece: '01.jpeg' },
    { x: 1, y: 3, piece: '02.jpeg' },
    { x: 1, y: 4, piece: '03.jpeg' },
    { x: 1, y: 5, piece: '04.jpeg' },
    { x: 1, y: 6, piece: '05.jpeg' },
    { x: 1, y: 7, piece: '06.jpeg' },
    { x: 1, y: 8, piece: '07.jpeg' },
    { x: 2, y: 1, piece: '08.jpeg' },
    { x: 2, y: 2, piece: '09.jpeg' },
    { x: 2, y: 3, piece: '10.jpeg' },
    { x: 2, y: 4, piece: '11.jpeg' },
    { x: 2, y: 5, piece: '12.jpeg' },
    { x: 2, y: 6, piece: '13.jpeg' },
    { x: 2, y: 7, piece: '14.jpeg' },
    { x: 2, y: 8, piece: '15.jpeg' },
    { x: 3, y: 1, piece: '16.jpeg' },
    { x: 3, y: 2, piece: '17.jpeg' },
    { x: 3, y: 3, piece: '18.jpeg' },
    { x: 3, y: 4, piece: '19.jpeg' },
    { x: 3, y: 5, piece: '20.jpeg' },
    { x: 3, y: 6, piece: '21.jpeg' },
    { x: 3, y: 7, piece: '22.jpeg' },
    { x: 3, y: 8, piece: '23.jpeg' },
    { x: 4, y: 1, piece: '24.jpeg' },
    { x: 4, y: 2, piece: '25.jpeg' },
    { x: 4, y: 3, piece: '26.jpeg' },
    { x: 4, y: 4, piece: '27.jpeg' },
    { x: 4, y: 5, piece: '28.jpeg' },
    { x: 4, y: 6, piece: '29.jpeg' },
    { x: 4, y: 7, piece: '30.jpeg' },
    { x: 4, y: 8, piece: '31.jpeg' },
    { x: 5, y: 1, piece: '32.jpeg' },
    { x: 5, y: 2, piece: '33.jpeg' },
    { x: 5, y: 3, piece: '34.jpeg' },
    { x: 5, y: 4, piece: '35.jpeg' },
    { x: 5, y: 5, piece: '36.jpeg' },
    { x: 5, y: 6, piece: '37.jpeg' },
    { x: 5, y: 7, piece: '38.jpeg' },
    { x: 5, y: 8, piece: '39.jpeg' },
    { x: 6, y: 1, piece: '40.jpeg' },
    { x: 6, y: 2, piece: '41.jpeg' },
    { x: 6, y: 3, piece: '42.jpeg' },
    { x: 6, y: 4, piece: '43.jpeg' },
    { x: 6, y: 5, piece: '44.jpeg' },
    { x: 6, y: 6, piece: '45.jpeg' },
    { x: 6, y: 7, piece: '46.jpeg' },
    { x: 6, y: 8, piece: '47.jpeg' }
  ];


  constructor(private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.loadPuzzlePieces();
  }

  loadPuzzlePieces() {
    this.initialPositions.forEach(position => {
      this.puzzleService.getPieceImage(position.piece).subscribe(blob => {
        this.createPiece(position, blob);
      });
    });
  }

  createPiece(position: any, blob: Blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const piece = {
        id: position.id,
        x: position.x,
        y: position.y,
        piece: position.piece,
        image: reader.result
      };
      this.pieces.push(piece);
    };
    reader.readAsDataURL(blob);
  }

  pieceClicked(piece: any) {
    const correctPiece = this.correctPositions.find(p => p.piece === piece.piece && p.x === piece.x && p.y === piece.y);
    if (correctPiece) {
      return;
    }
    if (!this.selectedPiece) {
      this.selectedPiece = piece;
    } else {
      const tempX = this.selectedPiece.x;
      const tempY = this.selectedPiece.y;
      this.selectedPiece.x = piece.x;
      this.selectedPiece.y = piece.y;
      piece.x = tempX;
      piece.y = tempY;

      this.checkPiecePosition(this.selectedPiece);
      this.checkPiecePosition(piece);

      this.selectedPiece = null;
    }
  }

  checkPiecePosition(piece: any) {
    const correctPosition = this.correctPositions.find(pos =>
      pos.piece === piece.piece
    );
    if (correctPosition && piece.x === correctPosition.x && piece.y === correctPosition.y) {
      this.correctCount++;
      if (this.correctCount === (this.correctPositions.length - 1)) {
        const button = document.getElementById('nextButton') as HTMLButtonElement;
        if (button) {
          button.disabled = false;
        }
      }
    }
  }

  getPiecesInPosition(row: number, column: number): any[] {
    return this.pieces.filter(piece => piece.x === row && piece.y === column);
  }
}
