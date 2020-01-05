import home from './index';

describe('Controller: Home', () => {
	let $controller;

	beforeEach(() => {
		angular.mock.module(home)
	});

	beforeEach(angular.mock.inject((_$controller_) => {
		$controller = _$controller_;
	}));

	it('name is initialized to World', () => {
		let ctrl = $controller('HomeController');
		expect(ctrl.name).toBe('World');
	});
});