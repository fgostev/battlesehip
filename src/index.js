import css from "./style.css";
import {pageLoad} from "./scripts/dom.js";
import {game} from './scripts/game.js';
import {shipSelectionEventListeners} from './scripts/shipPlacement';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


pageLoad();
shipSelectionEventListeners();