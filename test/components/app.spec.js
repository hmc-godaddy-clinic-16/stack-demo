import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom-global';

import {App} from '../../src/components/app';

describe('<App/>', () => {

  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

  it('should handle toggling special', () => {
    const addAction = sinon.spy();
    const wrapper = shallow(<App add={addAction} name={[]}/>);
    expect(wrapper.find('Hello').prop('special')).to.equal(false);
    wrapper.find('Hello').simulate('click');
    expect(wrapper.find('Hello').prop('special')).to.equal(true);
  });

  it('should handle adding friends', () => {
    const addAction = sinon.spy();
    const wrapper = shallow(<App add={addAction} name={[]}/>);
    wrapper.find('AddForm').simulate('add', 'friend');
    expect(addAction.calledOnce).to.equal(true);
    expect(addAction.args[0][0]).to.equal('friend');
  });

});
