import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-batch202108';
  isTitleVisibile = false;
  dummyArray: Array<number>;

  constructor() {
    this.dummyArray = [];
    for (let i = 0; i < 10000; i++) {
      this.dummyArray.push(i);
    }
  }

  setTitle(value: string): void {
    console.log('Button has been clicked');
    this.title = value;
    this.isTitleVisibile = !this.isTitleVisibile;
  }
}
