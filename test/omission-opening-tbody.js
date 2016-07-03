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
test('`tbody` (opening)', function (t) {
  t.deepEqual(
    to(h('tbody'), {omitOptionalTags: true}),
    '<tbody>',
    'should not omit tag without children'
  );

  t.deepEqual(
    to(h('tbody', h('tr')), {omitOptionalTags: true}),
    '<tr>',
    'should omit tag if head is `tr`'
  );

  t.deepEqual(
    to(h('table', [
      h('thead', h('tr')),
      h('tbody', h('tr'))
    ]), {omitOptionalTags: true}),
    '<table><thead><tr><tbody><tr></table>',
    'should not omit tag preceded by an omitted `thead` ' +
    'closing tag'
  );

  t.deepEqual(
    to(h('table', [
      h('tbody', h('tr')),
      h('tbody', h('tr'))
    ]), {omitOptionalTags: true}),
    '<table><tr><tbody><tr></table>',
    'should not omit tag preceded by an omitted `tbody` ' +
    'closing tag'
  );

  t.end();
});