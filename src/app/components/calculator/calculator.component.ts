import { Component, OnInit } from '@angular/core';
import { AdditionFinderService } from 'src/app/services/addition-finder.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  availableNumbers: number[] = [];
  availableLens: number[] = [];
  minVal = 1;
  maxVal = 45;
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

  onReset() {
    this.availableLens = [...this.allNumbers];
    this.availableNumbers = [...this.allNumbers];
    this.dirty = false;
    this.sumOptions = [];
  }

  calculateSum() {
    //this -1 is so that the user can delete all the contents
    if (this.target < this.minVal - 1) {
      this.target = this.minVal;
    } else if (this.target > this.maxVal) {
      this.target = this.maxVal;
    }

    this.sumOptions = this.addition.findSum(
      this.availableNumbers,
      this.target,
      this.availableLens
    );

    this.dirty = true;
  }

  hideOption(option: number[]) {
    const index = this.sumOptions.indexOf(option);
    this.sumOptions.splice(index, 1);
  }
}
