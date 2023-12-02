import { Component } from '@angular/core';
import { AppVersionService } from './services/app-version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  calculators: number[] = [0];
  nextIndex = 1;

  constructor(private _versionService: AppVersionService) {}

  onAddCalculator() {
    this.calculators.push(this.nextIndex);
    this.nextIndex += 1;
  }

  onRemoveCalculator() {
    this.calculators.pop();
  }

  onRemoveIndex(index: number) {
    this.calculators.splice(index, 1);
  }

  ngOnInit(): void {
    this._versionService.fetchVersion();
  }
}
