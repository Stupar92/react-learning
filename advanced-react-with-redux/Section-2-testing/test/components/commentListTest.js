import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(
            CommentList,
            null /*what is this?*/,
            {
                comments: ['comment1', 'comment2', 'comment3']
            });
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });
 
    it('shows each comment that is provided', () => {
        expect(component).to.contain('comment1');
        expect(component).to.contain('comment2');
        expect(component).to.contain('comment3');
    });

});