import { VideoPlayerComponent } from './video-player/video-player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFirstComponent } from './question-first/question-first.component';
import { PuzzleBoardComponent } from './puzzle-board/puzzle-board.component';

const routes: Routes = [
  { path: '', component: QuestionFirstComponent },
  { path: 'puzzle', component: PuzzleBoardComponent },
  { path: 'video', component: VideoPlayerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
