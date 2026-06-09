const assert = require('node:assert/strict');
const test = require('node:test');

const { buildRequestBody, parseResponse } = require('./agnesClient');
const { isValidImageInput } = require('../utils/image');

test('text2img url output uses extra_body.response_format', () => {
  const body = buildRequestBody({
    type: 'text2img',
    prompt: 'A city skyline',
    size: '1024x768',
    responseFormat: 'url',
  });

  assert.equal(body.prompt, 'A city skyline');
  assert.equal(body.size, '1024x768');
  assert.deepEqual(body.extra_body, { response_format: 'url' });
  assert.equal('return_base64' in body, false);
  assert.equal('image' in body, false);
});

test('text2img base64 output uses top-level return_base64', () => {
  const body = buildRequestBody({
    type: 'text2img',
    prompt: 'A product photo',
    size: '1024x768',
    responseFormat: 'b64_json',
  });

  assert.equal(body.return_base64, true);
  assert.equal('extra_body' in body, false);
  assert.equal('image' in body, false);
});

test('img2img base64 output keeps image at top level and response_format in extra_body', () => {
  const body = buildRequestBody({
    type: 'img2img',
    prompt: 'Make it cinematic',
    size: '1024x768',
    image: ['https://example.com/input.png'],
    responseFormat: 'b64_json',
  });

  assert.deepEqual(body.image, ['https://example.com/input.png']);
  assert.deepEqual(body.extra_body, { response_format: 'b64_json' });
  assert.equal('return_base64' in body, false);
  assert.equal('tags' in body, false);
});

test('image input validation supports strict HTTPS and image data URI', () => {
  assert.equal(isValidImageInput('https://example.com/input.png', { requireHttps: true }), true);
  assert.equal(isValidImageInput('http://example.com/input.png', { requireHttps: true }), false);
  assert.equal(isValidImageInput('data:image/png;base64,QUJDRA==', { requireHttps: true }), true);
  assert.equal(isValidImageInput('data:text/plain;base64,QUJDRA==', { requireHttps: true }), false);
});

test('parseResponse keeps Agnes data format and images compatibility alias', () => {
  const result = parseResponse({
    created: 1780000000,
    data: [
      {
        url: 'https://storage.example.com/output.png',
        b64_json: null,
        revised_prompt: null,
      },
    ],
  });

  assert.deepEqual(result.data, [
    {
      url: 'https://storage.example.com/output.png',
      b64_json: null,
      revised_prompt: null,
    },
  ]);
  assert.deepEqual(result.images, [
    {
      url: 'https://storage.example.com/output.png',
      b64: null,
      revisedPrompt: null,
    },
  ]);
});
