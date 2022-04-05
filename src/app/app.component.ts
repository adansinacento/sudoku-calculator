import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calculators: boolean[] = [true];

  onAddCalculator() {
    this.calculators.push(true);
  }

  onRemoveCalculator() {
    this.calculators.pop();
  }
}
