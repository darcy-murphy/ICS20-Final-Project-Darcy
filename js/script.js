// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

/**
 * This function updates the slider value.
 */
alert("The computer chose: " + k); 
var things = ['Heads', 'Tails', ];
var thing = things[Math.floor(Math.random()*things.length)];
alert('The computer chose:' + thing);