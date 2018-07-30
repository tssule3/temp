import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokerComponent } from './joker/joker.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  {path: 'joker', component: JokerComponent},
  {path: 'drag', component: DragDropComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
