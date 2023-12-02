import { Component } from '@angular/core';
import { AppVersionService } from 'src/app/services/app-version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  version = '0.0.0';

  constructor(private _versionService: AppVersionService) {}

  ngOnInit(): void {
    this.version = this._versionService.version;
  }
}
