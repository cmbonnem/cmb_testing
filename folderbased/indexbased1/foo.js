/**
 * index file based requires. Because the index.js file is found within ./bar the requires within that directory are
 * automatically found by node.js search
 */
var bar = require('./bar');
bar.bar1();
bar.bar2();
