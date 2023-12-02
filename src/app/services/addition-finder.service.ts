import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdditionFinderService {
  findSum(
    numbers: number[],
    target: number,
    lenghtOptions: number[],
    mandatory: number[]
  ) {
    const responses = this.sum_partial(
      numbers,
      target,
      lenghtOptions,
      [],
      mandatory
    ).sort((a, b) => a.length - b.length);

    return this.checkMandatory(responses, mandatory);
  }

  private checkMandatory(
    responses: number[][],
    mandatory: number[]
  ): number[][] {
    if (mandatory.length === 0) return responses;

    const final: number[][] = [];
    for (const response of responses) {
      let hasMandatory = true;
      for (const mandatoryDigit of mandatory) {
        //every single mandatory digit must be included
        if (!response.includes(mandatoryDigit)) {
          hasMandatory = false;
          break;
        }
      }

      if (hasMandatory) {
        final.push(response);
      }
    }

    return final;
  }

  //thanks to https://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
  private sum_partial(
    numbers: number[],
    target: number,
    lenghtOptions: number[],
    partial: number[],
    mandatory: number[]
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

      const responses = this.sum_partial(
        remaining,
        target,
        lenghtOptions,
        [...partial, n],
        mandatory
      );
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
