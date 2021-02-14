import "./styles.scss";
import React, { useState } from "react";
import { render } from "react-dom";

let currentDate = new Date();
document.getElementById("currentDate").innerHTML = currentDate.toDateString();

