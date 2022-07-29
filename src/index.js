import css from "./style.css";
import {pageLoad} from "./scripts/dom.js";
import {game, player2} from './scripts/game.js';
import {shipSelectionEventListeners} from './scripts/shipPlacement';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// test
import computerRandomizedShips from "./scripts/computerShipPlacement";
// stop here

pageLoad();
shipSelectionEventListeners();

// // temp fun for testing
// computerRandomizedShips();
// game();
// // stop here