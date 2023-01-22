// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 * 
 */
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');
flipCoin(c);
var W = canvas.clientWidth;
var H = canvas.clientHeight;

function flipCoin()
{
var flip = Math.floor(Math.random() * 2)
console.log(flip);
if (flip === 0)
{
drawHeads(200, 200, "Gold");
} else {
  drawTails(400, 200, "Silver");
}


}
function drawHeads(xLoc, yLoc, color)
{
  c.beginPath();
  c.fillStyle = color;
  c.strokeStyle = "Black"
  c.lineWidth = 5;
  c.arc(xLoc, yLoc, 100, 0, 2 * Math.PI);
  c.fill();
  c.stroke();
  c.closePath;
  c.fillStyle = "Black";
  c.font = "72px Arial";
  c.fillText("H", xLoc, yLoc);
}
function drawTails(xLoc, yLoc, color){
  c.beginPath();
  c.fillStyle = color;
  c.strokeStyle = "Black"
  c.lineWidth = 5;
  c.arc(xLoc, yLoc, 100, 0, 2 * Math.PI);
  c.fill();
  c.stroke();
  c.closePath;
  c.fillStyle = "Black";
  c.font = "72px Arial";
  c.fillText("T", xLoc, yLoc);
}

