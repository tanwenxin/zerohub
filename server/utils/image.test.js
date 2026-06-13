'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { isValidImageInput } = require('./image');

test('isValidImageInput accepts http and https URLs by default', () => {
  assert.equal(isValidImageInput('http://example.com/a.jpg'), true);
  assert.equal(isValidImageInput('https://example.com/a.jpg'), true);
});

test('isValidImageInput can require HTTPS URLs', () => {
  assert.equal(isValidImageInput('http://example.com/a.jpg', { requireHttps: true }), false);
  assert.equal(isValidImageInput('https://example.com/a.jpg', { requireHttps: true }), true);
});

test('isValidImageInput requires image Data URI with valid base64', () => {
  assert.equal(isValidImageInput('data:image/png;base64,iVBORw0KGgo='), true);
  assert.equal(isValidImageInput('data:text/plain;base64,aGVsbG8='), false);
  assert.equal(isValidImageInput('data:image/png;base64,not-valid-@@'), false);
});
