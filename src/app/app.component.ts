import { Component, OnInit } from '@angular/core';
import { AdditionFinderService } from './services/addition-finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  availableNumbers: number[] = [];
  availableLens: number[] = [];
  target = 23;
  dirty = false;

  sumOptions: number[][] = [];

  constructor(private addition: AdditionFinderService) {}

  ngOnInit(): void {
    this.availableNumbers = [...this.allNumbers];
    this.availableLens = [...this.allNumbers];
  }

  isAvailableDigit(n: number) {
    return this.availableNumbers.includes(n);
  }

  onCheckboxChangeDigit(n: number) {
    if (this.isAvailableDigit(n)) {
      const i = this.availableNumbers.indexOf(n);
      this.availableNumbers.splice(i, 1);
    } else {
      this.availableNumbers = [...this.availableNumbers, n];
    }

    this.calculateSum();
  }

  isAvailableLen(n: number) {
    return this.availableLens.includes(n);
  }

  onCheckboxChangeLen(n: number) {
    if (this.isAvailableLen(n)) {
      const i = this.availableLens.indexOf(n);
      this.availableLens.splice(i, 1);
    } else {
      this.availableLens = [...this.availableLens, n];
    }

    this.calculateSum();
  }

  calculateSum() {
    this.sumOptions = this.addition.findSum(
      this.availableNumbers,
      this.target,
      this.availableLens
    );

    this.dirty = true;
  }
}
