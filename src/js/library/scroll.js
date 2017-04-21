/**
 *
 *  scroll.js
 *
 */

import velocity from 'Velocity';
import scrollWatcher from '../vendor/scroll-watcher.js';

const scroll = function() {
  let $fadeElems = $('.js-fade');
  let fadeThreshold = 300;

  let watcher = new ScrollWatcher();
  watcher.on('scrolling', function(e) {
    let viewHeight = jQuery(window).height();

    for(let i = 0; i < $fadeElems.length; i++) {
      let elem = $fadeElems.get(i);
      let elemTop = elem.getBoundingClientRect().top;
      let offset = viewHeight - elemTop;
      let offsetThreshold = 300;
      if (offset > offsetThreshold) {
        $(elem).removeClass('js-fade');
        $(elem).addClass('js-fade-done');
        $fadeElems.splice(i, 1);
      }
    }
  });
}

export {
  scroll
}
