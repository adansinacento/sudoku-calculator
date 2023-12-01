import { Component } from '@angular/core';
import { AppVersionService } from './services/app-version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calculators: boolean[] = [true];

  constructor(private _versionService: AppVersionService) {}

  onAddCalculator() {
    this.calculators.push(true);
  }

  onRemoveCalculator() {
    this.calculators.pop();
  }

  ngOnInit(): void {
    this._versionService.fetchVersion();
  }
}
