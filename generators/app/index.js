'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var slugify = require("underscore.string/slugify");

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the incredible' + chalk.red('React Component') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      done();
    });
  },

  writing: function () {
    var context = _.assign({}, this, {slugify: slugify});
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      context
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    )
    this.fs.copy(
      this.templatePath('travis.yml'),
      this.destinationPath('.travis.yml')
    )
    // this.fs.copy(
    //   this.templatePath('webpack.config.js'),
    //   this.destinationPath('webpack.config.js')
    // );
    // this.fs.copy(
    //   this.templatePath('gulpfile.js'),
    //   this.destinationPath('gulpfile.js')
    // );
    // this.fs.copy(
    //   this.templatePath('client/**/*'),
    //   this.destinationPath('client')
    // );
  },

  install: function () {
    // this.installDependencies();
  }
});
