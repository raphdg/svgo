'use strict';

exports.type = 'perItem';

exports.active = true;

exports.fn = function(item) {
  if (item.isElem('svg')) {
    item.removeAttr('width');
    item.removeAttr('height');
    item.removeAttr('x');
    item.removeAttr('y');
  }
};
