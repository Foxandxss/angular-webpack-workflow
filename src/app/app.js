import angular from 'angular';
import AppCtrl from './app.controller';
import Generic from './generic.service';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', ['Generic', AppCtrl])
    .service('Generic', Generic);

export default MODULE_NAME;