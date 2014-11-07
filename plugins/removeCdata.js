'use strict';

exports.type = 'perItem';

exports.active = true;

exports.fn = function(item) {
  var cdata = false;
  if (item.isElem('style')) {
    if (item.content) {
      cdata = item.content.some(function (i) {
        return i.hasOwnProperty('cdata')
      });
    }
  }
  return !cdata;
};
