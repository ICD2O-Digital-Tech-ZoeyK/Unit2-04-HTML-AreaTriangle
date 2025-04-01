// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let Height = parseInt(document.getElementById('height-of-triangle').value);
  let Base = parseInt(document.getElementById('base-of-triangle').value);
  // process
  let area = (Base * Height) * 0.5;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}