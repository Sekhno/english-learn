import {Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {vocabulary, affirmative, negative} from "./examples";

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.scss'],
})
export class Unit3Component {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;

  readonly vocabulary = vocabulary;
  readonly affirmative = affirmative;
  readonly negative = negative

  constructor() { }

  finish() {
    setLevel('level', '3').then(() => {
      console.log('Level set to 3.')
    })
  }
}
