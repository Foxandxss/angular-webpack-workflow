import app from './app';

describe('app', () => {
    describe('AppCtrl', () => {
        let ctrl;

        beforeEach(() => {
            angular.mock.module(app);

            angular.mock.inject(($controller) => {
                ctrl = $controller('AppCtrl', {});
            });
        });

        it('should contain the starter url', () => {
            expect(ctrl.url).toBe('https://github.com/suvsoob/angularjs-webpack');
        });

        it('should have at least one service defined', () => {
            expect(ctrl.serviceName).toBe('Generic Service');
        });
    });
});