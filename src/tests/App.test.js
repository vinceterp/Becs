import React from 'react';
import App from '../components/App.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<App/>,);
    expect(app.toJSON()).toMatchSnapshot();
});