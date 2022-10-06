// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("area").innerHTML =
    "<p>The Area is: " + 24 * 8 + "cm²" + "</p>"
  document.getElementById("perimeter").innerHTML =
    "<p>The Perimeter is: " + 2 * (24 + 52) + "cm" + "/p>"
}
