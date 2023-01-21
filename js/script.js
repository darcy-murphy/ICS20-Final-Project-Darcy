// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Justin-Allen/sw.js", {
    scope: "/ICS2O-Final-Project-Justin-Allen/",
  })
}

;("use strict")

function myButtonClicked() {
  var c = "Rock";
  var d = "Paper";
  var e = "Scissors";
  var thing = window['cde'.charAt(Math.floor(Math.random()*3))];
  document.write('The computer chose: ' + thing);
  
}