import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
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

  it('should bubble click events', () => {
    const click = sinon.spy();
    const wrapper = mount(<Hello name={["HMU", "GoDaddy"]} onClick={click}/>);
    wrapper.find('p').at(0).simulate('click');
    expect(click.calledOnce).to.equal(true);
  });

  it('should handle click when there is not a click event handler', () => {
    const wrapper = mount(<Hello name={["HMU", "GoDaddy"]}/>);
    wrapper.find('p').at(0).simulate('click');
  });

});
