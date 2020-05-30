import React from 'react';
import Login from '../components/Login.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<Login/>,);
    expect(app.toJSON()).toMatchSnapshot();
});