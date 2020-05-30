import React from 'react';
import Book from '../components/Book.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<Book/>,);
    expect(app.toJSON()).toMatchSnapshot();
});