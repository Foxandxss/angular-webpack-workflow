import angular from 'angular';

import { appModule } from './app.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let $componentController;
  let appService;

  beforeEach(() => angular.mock.module(appModule));
  beforeEach(angular.mock.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));
  beforeEach(angular.mock.inject([AppService.name, (_appService_) => {
    appService = _appService_;
  }]));

  it('appName should be equal to app service value', () => {
    const ctrl = $componentController(AppComponent.selector);
    expect(ctrl.appName).toEqual(appService.name);
  });
});
