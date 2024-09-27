// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'

let menu = document.getElementById('menu-btn')
let html = document.getElementById('html')

menu.onclick = function(){
    html.classList.toggle('menu-open')
}
let wrappers = document.querySelectorAll('.wrapper')
let links = document.querySelectorAll('.link')
links[0].onclick = function(){
    wrappers[0].classList.remove('none')
    wrappers[1].classList.add('none')
    wrappers[2].classList.add('none')
    wrappers[3].classList.add('none')
    wrappers[4].classList.add('none')
    wrappers[5].classList.add('none')
}
links[1].onclick = function(){
    wrappers[1].classList.remove('none')
    wrappers[0].classList.add('none')
    wrappers[2].classList.add('none')
    wrappers[3].classList.add('none')
    wrappers[4].classList.add('none')
    wrappers[5].classList.add('none')
}
links[2].onclick = function(){
    wrappers[2].classList.remove('none')
    wrappers[0].classList.add('none')
    wrappers[1].classList.add('none')
    wrappers[3].classList.add('none')
    wrappers[4].classList.add('none')
    wrappers[5].classList.add('none')
}
links[3].onclick = function(){
    wrappers[3].classList.remove('none')
    wrappers[0].classList.add('none')
    wrappers[1].classList.add('none')
    wrappers[2].classList.add('none')
    wrappers[4].classList.add('none')
    wrappers[5].classList.add('none')
}