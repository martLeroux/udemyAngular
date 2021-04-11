import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphVisibility = true;
  counter = 0;
  buttonClicks = [];

  onButtonClick() {
    this.paragraphVisibility = !this.paragraphVisibility;
    this.counter = this.counter + 1;
    this.buttonClicks.push(new Date());
    console.log(this.counter);
  }

  getBackground(counter) {
    console.log(counter);
    return counter >= 4 ? 'blue' : '';
  }
}
