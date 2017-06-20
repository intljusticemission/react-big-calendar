/* eslint-env mocha */
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Agenda from '../../src/Agenda';
import events from '../factories/events';
import localizer from '../../src/localizer'

describe('<Agenda />', () => {
  let props;
  let sandbox;
  let titleAccessor;
  let allDayAccessor;
  let startAccessor;
  let endAccessor;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    titleAccessor = sandbox.stub();
    allDayAccessor = sandbox.stub();
    startAccessor = 'start';
    endAccessor = 'end';
    sandbox.stub(localizer, 'format').returns('mock');

    props = {
      events: events,
      date: new Date(2015, 3, 0),
      components: {},
      titleAccessor,
      allDayAccessor,
      startAccessor,
      endAccessor,
      agendaLength: 10
    };
  });

  afterEach(() => sandbox.restore());

  describe('on componentDidMount', () => {
    it('has agendaLength prop', () => {
      const wrapper = mount(<Agenda {...props} />);

      expect(wrapper).to.have.prop('agendaLength', 10);
    });
  });

  describe('render', () => {
    context('agendaLength is greater than 0', () => {
      it('renders date header', () => {
        const wrapper = mount(<Agenda {...props} />);

        expect(wrapper.ref('dateCol')).to.be.present();
      });

      it('renders date content', () => {
        const wrapper = mount(<Agenda {...props} />);

        expect(wrapper.find('.rbc-agenda-date-cell')).to.have.length(1);
      });
    });
    
    context('agendaLength is 0', () => {
      beforeEach(() => {
        props.agendaLength = 0;
      });
      
      it('does not render date header', () => {
        const wrapper = mount(<Agenda {...props} />);

        expect(wrapper.ref('dateCol')).to.not.present();
      });

      it('does not render date content', () => {
        const wrapper = mount(<Agenda {...props} />);

        expect(wrapper.find('.rbc-agenda-date-cell')).to.have.length(0);
      });
    });
  });

  describe('Agenda.range', () => {
    it('returns an array of start date and end date', () => {
      const start = new Date(2017, 6, 1);
      const end = new Date(2017, 6, 11);

      const result = Agenda.range(start, { length: 10 });

      expect(result).to.deep.equal([start, end]);
    });
  });
});