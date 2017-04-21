/**
 *
 *  scroll.js
 *
 */

import velocity from 'Velocity';
import scrollWatcher from '../vendor/scroll-watcher.js';

const scroll = function() {
  var watcher = new ScrollWatcher();
    watcher.on('scrolling', function(evt) {
    console.log(evt);
  });

  $("body").velocity({ opacity: 0.5 });

  let $fadeElems = $('.js-fade');
  $fadeElems.forEach(($elem) => {
    console.log($elem);
  });
}

export {
  scroll
}
