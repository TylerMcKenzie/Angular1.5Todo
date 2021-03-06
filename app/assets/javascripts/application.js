// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require cable
//= require jquery
//= require angular
//= require angular-rails-templates
//= require angular-route
//= require angular-websocket
//= require angular-actioncable
//= require AngularDevise

//= require app.js
//= require_tree ./components
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./factories

console.log("This application is made with Angular v1.5.8 and a Rails v5.0.3 API")
