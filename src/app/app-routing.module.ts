import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PuzzleSecondComponent } from './puzzle-second/puzzle-second.component';
import { QuestionFirstComponent } from './question-first/question-first.component';

const routes: Routes = [
  { path: '', component: QuestionFirstComponent  },
  { path: 'puzzle', component: PuzzleSecondComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
