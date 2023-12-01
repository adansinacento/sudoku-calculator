import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdditionFinderService {
  findSum(numbers: number[], target: number, lenghtOptions: number[]) {
    return this.sum_partial(numbers, target, lenghtOptions, []).sort(
      (a, b) => a.length - b.length
    );
  }

  //thanks to https://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
  private sum_partial(
    numbers: number[],
    target: number,
    lenghtOptions: number[],
    partial: number[]
  ): number[][] {
    const sum = this.arraySum(partial);
    let answ: number[][] = [];

    //check if the partial sum equals the target
    if (sum === target && lenghtOptions.includes(partial.length)) {
      answ = [...answ, partial.sort()];
    } else if (sum >= target) {
      return [];
    }

    for (let i = 0; i < numbers.length; i++) {
      const n = numbers[i];

      const remaining = numbers.slice(i + 1, numbers.length);

      const responses = this.sum_partial(remaining, target, lenghtOptions, [
        ...partial,
        n,
      ]);
      answ = [...answ, ...responses];
    }

    return answ.sort((a, b) => b.length - a.length);
  }

  private arraySum(numbers: number[]) {
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
      temp += numbers[i];
    }

    return temp;
  }
}
