import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor(private http: HttpClient) { }

  getPieceImage(piece: string): Observable<Blob> {
    return this.http.get('assets/puzzle-pieces/' + piece, { responseType: 'blob' });
  }
}

