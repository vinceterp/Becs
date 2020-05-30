import React from 'react';
import Header from '../components/Header.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<Header/>,);
    expect(app.toJSON()).toMatchSnapshot();
});