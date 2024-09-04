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