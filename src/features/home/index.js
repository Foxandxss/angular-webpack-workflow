import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import RandomNames from '../../services/randomNames.service';
import Greeting from '../../directives/greeting.directive';
console.log(Greeting);

export default angular.module('app.home', [uirouter])
	.config(routing)
	.controller('HomeController', HomeController)
	.service('randomNames', RandomNames)
	.directive('greeting', () => new Greeting)
	.name;
