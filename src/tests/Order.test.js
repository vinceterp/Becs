import React from 'react';
import Order from '../components/Order.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<Order/>,);
    expect(app.toJSON()).toMatchSnapshot();
});