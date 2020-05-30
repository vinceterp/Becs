import React from 'react';
import AddBookForm from '../components/AddBookForm.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<AddBookForm/>,);
    expect(app.toJSON()).toMatchSnapshot();
});