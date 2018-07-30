import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { JokerComponent } from './joker/joker.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [JokerComponent, DragDropComponent, SimpleDragComponent]
})
export class SharedModule { }
