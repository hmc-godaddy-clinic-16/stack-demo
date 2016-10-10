import React from 'react';
import jsdom from 'jsdom-global';

import Hello from '../src/hello.js';

describe('<Hello/>', () => {

  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

});
