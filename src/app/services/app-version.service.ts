import { Injectable } from '@angular/core';
import packageJson from '../../../package.json';

@Injectable({ providedIn: 'root' })
export class AppVersionService {
  version = '0.0.0';

  fetchVersion() {
    this.version = packageJson.version;
  }
}
