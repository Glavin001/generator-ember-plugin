require('build/temp/template');

Ember.Plugin = Ember.Namespace.create();
Ember.Plugin.VERSION = '0.0.1';

Ember.libraries.register('Ember Plugin', Ember.Plugin.VERSION);

require('lib/scripts/index');
