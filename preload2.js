const electron = require('electron');
// var remote = require('remote');
const remote = require('electron').remote;
const windowManager = remote.require('electron-window-manager');
// var windowManager = require("electron-window-manager");
const { v4: uuidv4 } = require('uuid');
// const remote = require('remote');

window.addEventListener('DOMContentLoaded', () => {
    let h = document.getElementById("hello");
    h.innerText = "Preload";
    console.log("Hello");
    windowManager.sharedData.watch( "Test", function(prop, action, newValue, oldValue){
        console.log('The property: ', prop, ' was:', action, ' to: ', newValue, ' from: ', oldValue);
    });
});