'use strict';

exports.type = 'perItem';

exports.active = true;

exports.fn = function(item) {
  if (item.isElem('svg')) {
    var nsAttr = item.addAttr({
      name: 'xmlns:xlink',
      value: 'http://www.w3.org/1999/xlink',
      prefix: 'xmlns',
      local: 'xlink'
    });
    item.removeAttr('width');
    item.removeAttr('height');
    item.removeAttr('x');
    item.removeAttr('y');
  }
};
