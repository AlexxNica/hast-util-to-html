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
var u = require('unist-builder');
var to = require('..');

/* Tests. */
test('`html` (opening)', function (t) {
  t.deepEqual(
    to(h('html'), {omitOptionalTags: true}),
    '',
    'should omit tag without first child'
  );

  t.deepEqual(
    to(h('html', [u('comment', 'alpha'), 'bravo']), {omitOptionalTags: true}),
    '<html><!--alpha-->bravo',
    'should not omit tag if head is `comment`'
  );

  t.deepEqual(
    to(h('html', 'bravo'), {omitOptionalTags: true}),
    'bravo',
    'should omit tag if head is not `comment`'
  );

  t.end();
});