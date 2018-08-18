// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';

const context = require.context('./app', true, /\.js$/);

context.keys().forEach(context);