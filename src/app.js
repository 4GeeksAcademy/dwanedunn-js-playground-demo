import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  console.log('Project works!');
  CreateExcuseButton();
  console.log("Hello Rigo from the console!");
};

function CreateExcuseButton(){
  const element = document.querySelector(".alert");

  element.insertAdjacentHTML('afterend', `<button class="btn btn-success" type="button">Create Excuse</button>`);
}