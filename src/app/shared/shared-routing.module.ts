import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokerComponent } from './joker/joker.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {SimpleDragComponent} from './simple-drag/simple-drag.component';
import {DragExComponent} from './drag-ex/drag-ex.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {path: 'joker', component: JokerComponent},
  {path: 'drag', component: DragDropComponent},
  {path: 'simple', component: SimpleDragComponent},
  {path: 'drag-drop', component: DragExComponent},
  {path: 'file', component: FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
