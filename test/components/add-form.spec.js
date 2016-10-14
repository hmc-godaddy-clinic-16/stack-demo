import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom-global';

import AddForm from '../../src/components/add-form';

describe('<AddForm/>', () => {

  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

  it('should have a text edit and button', () => {
    const onAdd = sinon.spy();
    const wrapper = mount(<AddForm onAdd={onAdd}/>);
    expect(wrapper.find('input').length).to.equal(2);
    expect(wrapper.find('input').at(0).prop('type')).to.equal('text');
    expect(wrapper.find('input').at(1).prop('type')).to.equal('submit');
  });

  it('should not fire an empty add event', () => {
    const onAdd = sinon.spy();
    const wrapper = mount(<AddForm onAdd={onAdd}/>);
    wrapper.find('input').at(1).simulate('click');
    expect(onAdd.notCalled).to.equal(true);
  });

  it('should fire a non-empty add event', () => {
    const onAdd = sinon.spy();
    const wrapper = mount(<AddForm onAdd={onAdd}/>);
    wrapper.find('input').at(0).simulate('change', {target: {value: 'Test'}});
    wrapper.find('input').at(1).simulate('click');
    expect(onAdd.calledOnce).to.equal(true);
    expect(onAdd.args[0][0]).to.equal('Test');
  });

});
