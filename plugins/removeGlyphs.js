'use strict';

exports.type = 'perItem';

exports.active = true;

exports.fn = function(item) {
  return !item.isElem('glyph');
};
