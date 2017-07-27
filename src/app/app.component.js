import './app.component.scss';
import templateUrl from './app.component.html';

import { AppService } from './app.service';

class AppController {
  constructor(appService) {
    this.appName = appService.name;
  }
}

AppController.$inject = [AppService.name];

export const AppComponent = {
  selector: 'app',
  templateUrl,
  controller: AppController,
};
