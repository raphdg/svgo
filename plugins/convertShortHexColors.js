'use strict';

exports.type = 'perItem';

exports.active = true;

var collections = require('./_collections'),
    regHEX = /^\#([a-fA-F0-9]{3})$/;

exports.fn = function(item) {

    if (item.elem) {

        item.eachAttr(function(attr) {

            if (collections.colorsProps.indexOf(attr.name) > -1) {

                var val = attr.value.toLowerCase(),
                    match;

                // Convert long hex to short hex
                if (match = val.match(regHEX)) {
                    val = '#' + match[0][1] + match[0][1] + match[0][2] + match[0][2] + match[0][3] + match[0][3];
                    attr.value = val;
                }


            }

        });

    }

};

