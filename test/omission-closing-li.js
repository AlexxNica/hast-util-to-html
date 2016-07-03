/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast-util-to-html
 * @fileoverview Test suite for `hast-util-to-html`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var h = require('hastscript');
var to = require('..');

/* Tests. */
test('`li` (closing)', function (t) {
  t.deepEqual(
    to(h('li'), {omitOptionalTags: true}),
    '<li>',
    'should omit tag without parent'
  );

  t.deepEqual(
    to(h('ol', h('li')), {omitOptionalTags: true}),
    '<ol><li></ol>',
    'should omit tag without following'
  );

  t.deepEqual(
    to(h('ol', [h('li'), h('li')]), {omitOptionalTags: true}),
    '<ol><li><li></ol>',
    'should omit tag followed by `li`'
  );

  t.deepEqual(
    to(h('ol', [h('li'), h('p')]), {omitOptionalTags: true}),
    '<ol><li></li><p></ol>',
    'should not omit tag followed by others'
  );

  t.end();
});