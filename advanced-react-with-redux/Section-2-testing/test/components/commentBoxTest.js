import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/commentBox';

describe('CommentBox', () => {

    let component = null;

    beforeEach(() => {
        // renderComponent returns jquery object that contains our component so
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('commentBox');
    });

    it('has a text area', () => {
        // ...we can call jquery functions on component variable
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button'  )).to.exist;
    });

    describe('entering some text', () => {

        beforeEach(() => {
            // we extended jquery with simulate in test_helper.js
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });

    });
});