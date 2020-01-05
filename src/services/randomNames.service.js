import angular from 'angular';

export default class RandomNames {
	constructor() {
		this.names = ['John', 'Elisa', 'Mark', 'Annie'];
	}

	getName() {
		const rand = Math.floor(Math.random() * this.names.length);
		return this.names[rand];
	}
}