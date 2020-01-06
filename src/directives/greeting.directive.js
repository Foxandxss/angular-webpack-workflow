export default class Greeting {
	constructor() {
		this.template = '<h1>Hello, {{ ctrl.name }}</h1>';
		this.restrict = 'E';
		this.scope = { name: '=' };
		this.controller = GreetingController;
		this.controllerAs = 'ctrl';
		this.bindToController = true;
	}
}

class GreetingController {
	constructor() {
		this.name = 'World';
	}
}