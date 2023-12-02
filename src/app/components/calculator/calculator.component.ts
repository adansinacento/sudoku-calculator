import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdditionFinderService } from 'src/app/services/addition-finder.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  availableNumbers: number[] = [];
  availableLens: number[] = [];
  mandatoryNumbers: number[] = [];
  minVal = 1;
  maxVal = 45;
  target = 23;
  dirty = false;

  sumOptions: number[][] = [];
  @Input() index = 0;
  @Output('delted') deleteEmitter = new EventEmitter<number>();

  constructor(private addition: AdditionFinderService) {}

  ngOnInit(): void {
    this.availableNumbers = [...this.allNumbers];
    this.availableLens = [...this.allNumbers];
    this.mandatoryNumbers = [];
  }

  isAvailableDigit(n: number) {
    return this.availableNumbers.includes(n);
  }

  isAvailableLen(n: number) {
    return this.availableLens.includes(n);
  }

  isAvailableMandatory(n: number) {
    return this.mandatoryNumbers.includes(n);
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

  onCheckBoxChangeMandatory(n: number) {
    if (this.isAvailableMandatory(n)) {
      const i = this.mandatoryNumbers.indexOf(n);
      this.mandatoryNumbers.splice(i, 1);
    } else {
      this.mandatoryNumbers = [...this.mandatoryNumbers, n];
    }

    this.calculateSum();
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
    this.mandatoryNumbers = [];
    this.dirty = false;
    this.sumOptions = [];
  }

  onDelete() {
    this.deleteEmitter.emit(this.index);
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
      this.availableLens,
      this.mandatoryNumbers
    );

    this.dirty = true;
  }

  hideOption(option: number[]) {
    const index = this.sumOptions.indexOf(option);
    this.sumOptions.splice(index, 1);
  }
}
