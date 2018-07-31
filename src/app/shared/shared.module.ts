import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { JokerComponent } from './joker/joker.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { DragExComponent } from './drag-ex/drag-ex.component';
import {DndModule} from 'ng2-dnd';
import { DragAndDropModule } from 'angular-draggable-droppable';
@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DndModule.forRoot(),
    DragAndDropModule.forRoot()
  ],
  declarations: [JokerComponent, DragDropComponent, SimpleDragComponent, DragExComponent]
})
export class SharedModule { }
