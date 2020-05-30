import React from 'react';
import EditBookForm from '../components/EditBookForm.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<EditBookForm/>,);
    expect(app.toJSON()).toMatchSnapshot();
});