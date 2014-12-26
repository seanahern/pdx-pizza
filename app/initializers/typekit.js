// app/initializers/typekit.js

/* global Typekit */

import injectScript from 'ember-inject-script';
import config from '../config/environment';

export default {
  name: 'typekit',
  initialize: function() {
    var url = "//use.typekit.net/"+config.typekitID+".js";
    injectScript(url).then(function() {
      Typekit.load();
    });
  }
};