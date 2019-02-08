'use strict';
const todo = require('./index.js');
const assert = require('assert');

todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

console.log('テストが正常に終了しました');
