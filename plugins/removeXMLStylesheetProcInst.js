'use strict';

exports.type = 'perItem';

exports.active = true;

exports.fn = function(item) {

    if (item.processinginstruction) console.log(item);
    return !(item.processinginstruction && item.processinginstruction.name === 'xml-stylesheet');

};
