'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


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
    /*
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous EmberPlugin generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
    */
  },

  app: function () {
    // Example app
    this.mkdir('app');
    this.directory('app','app');
    // For GitHub Pages, build of example app
    this.mkdir('dist');

    // Library
    this.directory('lib','lib');
    // Pre-Built library for Bower
    this.mkdir('build');

    // Misc
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
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
