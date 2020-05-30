import React from 'react';
import Inventory from '../components/Inventory.js';
import renderer from 'react-test-renderer';

test("Matches the snapshot", () => {
    const app = renderer.create(<Inventory/>,);
    expect(app.toJSON()).toMatchSnapshot();
});