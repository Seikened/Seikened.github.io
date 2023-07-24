
const salida = document.getElementById("salida");
const express = require("express");


window.onload = () => {
    const todoForm = document.getElementById("todo-form")
    todoForm.onsubmit = (e) => {
        e.preventDefault();
        const entrada = document.getElementById("entrada");
        salida.innerText = entrada.value;
    }
}