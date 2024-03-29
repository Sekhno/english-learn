import { Component, OnInit } from '@angular/core';
import {PageTwoComponent} from "../page-two/page-two.component";
import {OneLessonComponent} from "../../lessons/one-lesson/one-lesson.component";
import {TwoLessonComponent} from "../../lessons/two-lesson/two-lesson.component";
import {ThreeLessonComponent} from "../../lessons/three-lesson/three-lesson.component";
import {TrainerProgressService} from "../../../../services/trainer-progress.service";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent {

  oneLessonComponent = OneLessonComponent;
  twoLessonComponent = TwoLessonComponent;
  threeLessonComponent = ThreeLessonComponent;

  component = PageTwoComponent;

  constructor(
    private _trainerProgressService: TrainerProgressService,
  ) {
    console.log('PageOneComponent constructor()')
  }

  isLessonNotComplete(lessonId: number) {
    return !this._trainerProgressService.isProgressCompleted(lessonId);
  }

}
