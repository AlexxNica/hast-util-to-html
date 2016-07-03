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
test('`tr` (closing)', function (t) {
  t.deepEqual(
    to(h('tr'), {omitOptionalTags: true}),
    '<tr>',
    'should omit tag without siblings'
  );

  t.deepEqual(
    to(h('table', h('tr')), {omitOptionalTags: true}),
    '<table><tr></table>',
    'should omit tag without following'
  );

  t.deepEqual(
    to(h('table', [h('tr'), h('tbody')]), {omitOptionalTags: true}),
    '<table><tr></tr><tbody></table>',
    'should not omit tag followed by others'
  );

  t.end();
});