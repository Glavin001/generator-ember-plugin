require('build/temp/template');

Ember.<%= camelizeName %> = Ember.Namespace.create();
Ember.<%= camelizeName %>.VERSION = '0.0.0';

Ember.libraries.register('<%= rawName %>', Ember.<%= camelizeName %>.VERSION);

require('lib/scripts/index');
