import { NgModule } from '@angular/core';
import {TrainerComponent} from "./trainer/trainer.component";
import {TrainerRoutingModule} from "./trainer-routing.module";
import {IonicModule} from "@ionic/angular";
import {MatStepperModule} from '@angular/material/stepper';
import {RouterLink} from "@angular/router";
import {WordsReorderComponent} from "../components/words-reorder/words-reorder.component";
import {NgForOf, NgIf} from "@angular/common";
import {WordsWriterComponent} from "../components/words-writer/words-writer.component";
import {MatListModule} from "@angular/material/list";
import {DragDropModule} from '@angular/cdk/drag-drop';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImagesComparisonComponent} from "../components/images-comparison/images-comparison.component";


const MaterialModules = [
  MatStepperModule,
  MatListModule,
  DragDropModule
]

@NgModule({
  declarations: [
    TrainerComponent,
    // WordsReorderComponent,
    // WordsWriterComponent,
    // ImagesComparisonComponent
  ],
  exports: [
    // WordsWriterComponent
  ],
  imports: [
    TrainerRoutingModule,
    IonicModule,
    RouterLink,
    NgForOf,
    NgIf,
    ...MaterialModules,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TrainerModule { }
