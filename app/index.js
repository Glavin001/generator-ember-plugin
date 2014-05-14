'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var fleck = require('fleck');

var EmberPluginGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {

    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous EmberPlugin generator!'));

    var prompts = [{
      name: 'rawName',
      message: 'What would you like to call your Ember Plugin/Library?',
      default: 'Ember Plugin Example'
    }];

    this.prompt(prompts, function (props) {
      this.rawName = props.rawName;
      this.underscoreName = fleck.underscore(props.rawName.split(' ').join('_'));
      this.dasherizeName = fleck.dasherize(this.underscoreName);
      this.camelizeName = fleck.camelize(this.underscoreName);

      done();
    }.bind(this));

  },

  app: function () {
    // Example app
    this.mkdir('app');
    this.copy('app/index.html');
    // Scripts
    this.mkdir('app/scripts');
    this.copy('app/scripts/app.js');
    this.copy('app/scripts/router.js');
    this.copy('app/scripts/store.js');
    this.mkdir('app/scripts/controllers');
    this.copy('app/scripts/controllers/index_controller.js');
    this.mkdir('app/scripts/models');
    this.mkdir('app/scripts/routes');
    this.copy('app/scripts/routes/index_route.js');
    this.mkdir('app/scripts/views');
    this.mkdir('app/scripts/components');
    this.mkdir('app/scripts/helpers');
    // Styles
    this.mkdir('app/styles');
    this.copy('app/styles/style.scss');
    // Templates
    this.mkdir('app/templates');
    this.copy('app/templates/index.hbs');

    // For GitHub Pages, build of example app
    this.mkdir('dist');

    // Library
    this.mkdir('lib');
    this.template('lib/lib.js');
    this.mkdir('lib/styles');
    this.copy('lib/styles/lib.scss');
    this.mkdir('lib/scripts');
    this.copy('lib/scripts/index.js');
    this.mkdir('lib/scripts/controllers');
    this.mkdir('lib/scripts/models');
    this.mkdir('lib/scripts/routes');
    this.mkdir('lib/scripts/views');
    this.mkdir('lib/scripts/components');
    this.mkdir('lib/scripts/helpers');
    // Pre-Built library for Bower
    this.mkdir('build');

    // Misc
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('README.md');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');
  }
});

module.exports = EmberPluginGenerator;
