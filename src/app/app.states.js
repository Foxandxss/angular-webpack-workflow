import { AppService } from './app.service';

const homeState = {
  name: 'home',
  url: '/',
  component: 'appHome',
  resolve: {
    header: [AppService.name, appService => appService.name],
  },
};

export const appStatesConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state(homeState);

  $urlRouterProvider.otherwise('/');
};
