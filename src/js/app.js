// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'
import { off } from 'gulp'

let menu = document.getElementById('menu-btn')
let html = document.getElementById('html')

menu.onclick = function(){
    html.classList.toggle('menu-open')
}
let wrapp1 = document.getElementById('w1')
let wrapp2 = document.getElementById('w2')
let li1 = document.getElementById('h')
let li2 = document.getElementById('b')
li1.onclick = function(){
    wrapp2.classList.add('none')
    wrapp1.classList.remove('none')
}
li2.onclick = function(){
    wrapp1.classList.add('none')
    wrapp2.classList.remove('none')
}