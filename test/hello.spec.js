import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import jsdom from 'jsdom-global';

import Hello from '../src/hello.js';

describe('<Hello/>', () => {

  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

  it('should say hello to HMU', () => {
    const wrapper = shallow(<Hello name={["HMU"]}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU');
  });

  it('should say HMU is special', () => {
    const wrapper = shallow(<Hello name={["HMU"]} special={true}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU!!!');
  });

  it('should say hello to multiple friends', () => {
    const wrapper = shallow(<Hello name={["HMU", "GoDaddy"]}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU');
    expect(wrapper.find('p').at(1).text()).to.equal('Hello GoDaddy');
  });

});
