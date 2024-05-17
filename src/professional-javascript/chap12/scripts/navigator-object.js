"use strict";

window.addEventListener("DOMContentLoaded", () => {
    register();
    console.log('done');
});


function register() {
    navigator.registerProtocolHandler('web+mailto', 'http://localhost:8000//?uri=%s');
}
