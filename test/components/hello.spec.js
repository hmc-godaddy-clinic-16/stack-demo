import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom-global';

import Hello from '../../src/components/hello.js';

describe('<Hello/>', () => {

  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

  it('should say hello to HMU', () => {
    const click = sinon.spy();
    const wrapper = shallow(<Hello name={['HMU']} onClick={click}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU');
  });

  it('should say HMU is special', () => {
    const click = sinon.spy();
    const wrapper = shallow(<Hello name={['HMU']} special={true} onClick={click}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU!!!');
  });

  it('should say hello to multiple friends', () => {
    const click = sinon.spy();
    const wrapper = shallow(<Hello name={['HMU', 'GoDaddy']} onClick={click}/>);
    expect(wrapper.find('p').at(0).text()).to.equal('Hello HMU');
    expect(wrapper.find('p').at(1).text()).to.equal('Hello GoDaddy');
  });

  it('should bubble click events', () => {
    const click = sinon.spy();
    const wrapper = mount(<Hello name={['HMU', 'GoDaddy']} onClick={click}/>);
    wrapper.find('p').at(0).simulate('click');
    expect(click.calledOnce).to.equal(true);
  });

  it('should handle click when there is not a click event handler', () => {
    const click = sinon.spy();
    const wrapper = mount(<Hello name={['HMU', 'GoDaddy']} onClick={click}/>);
    wrapper.find('p').at(0).simulate('click');
  });

});
