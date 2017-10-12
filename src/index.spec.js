import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './index';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('Button Component', () => {
    describe('when rendering the component', () => {
        interceptConsoleErrors();
        const sandbox = sinon.sandbox.create();
        afterEach(() => sandbox.restore());

        it('should throw warning for missing prop "value"', () => {
            shallow(<Button />);
            expectMissingProp('value', 'ReactUtilsButton');
        });

        it('should always have class "utils-button"', () => {
            const wrapper = shallow(<Button value='click'/>);
            expect(wrapper).to.have.className('utils-button');
        });

        it('should always have custom class if provided in props', () => {
            const wrapper = shallow(<Button className='custom-class' value='click'/>);
            expect(wrapper).to.have.className('custom-class');
        });

        it('should always have "utils-button--active" if active props is received', () => {
            const wrapper = shallow(<Button active={true} value='click'/>);
            expect(wrapper).to.have.className('utils-button--active');
        });

        it('should trigger the onClick callback when button is pressed', () => {
            const callback = sandbox.stub();
            const wrapper = shallow(<Button onClick={callback} value='click'/>);
            wrapper.simulate('click');
            expect(callback).to.have.been.calledOnce;
        });

        it('should not trigger onClick callback when it\'s disabled', () => {
            const callback = sandbox.stub();
            const wrapper = shallow(<Button onClick={callback} disabled={true} value='click'/>);
            wrapper.simulate('click');
            expect(callback).not.to.have.been.called;
        });

        it('should be disabled when prop is received', () => {
            const wrapper = shallow(<Button disabled={true} value='click'/>);
            expect(wrapper).to.have.attr('disabled', 'disabled');
        });

        it('should have the value received in props', () => {
            const wrapper = shallow(<Button value='click'/>);
            expect(wrapper.find('.utils-button-value')).to.have.text('click');
        });
    });
});

/** Intercept console errors (and warnings) in unit tests in order to check what errors ere printed */
function interceptConsoleErrors() {
    beforeEach(() => sinon.stub(console, 'error'));
    afterEach(() => console.error.restore());
}

/**
 * Assert for a missing property inside a component
 * @param prop {String} Property name
 * @param component {String} Component name
 */
function expectMissingProp(prop, component) {
    sinon.assert.calledWithMatch(console.error, new RegExp(`Failed prop type: The prop \`${prop}\` is marked as required in \`${component}\``));
}