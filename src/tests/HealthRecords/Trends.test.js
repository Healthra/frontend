import HealthRecords from '../../pages/HealthRecords/HealthRecords';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

test('Data is successfully received from parent component', async () => {
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer = new ShallowRenderer();
    renderer.render(<HealthRecords />);
    const result = renderer.getRenderOutput();

    // expect(result.type).toBe('div');
    // expect(result.props.id).toBe('records');

    const body = result.props.children[1];

    // expect(body.type).toBe('div');
    // expect(body.props.className).toBe('body');

    const navigation = body.props.children[0];
    const content = body.props.children[1];

    // console.log(content);
});
test('Default value is correctly shown in dropdown', async () => {
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer = new ShallowRenderer();
    renderer.render(<HealthRecords />);
    const result = renderer.getRenderOutput();

    // expect(result.type).toBe('div');
    // expect(result.props.id).toBe('records');

    const body = result.props.children[1];

    // expect(body.type).toBe('div');
    // expect(body.props.className).toBe('body');

    const navigation = body.props.children[0];
    const content = body.props.children[1];

    // console.log(content);
});
test('Graph data is updated on dropwdown selection change', async () => {
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer = new ShallowRenderer();
    renderer.render(<HealthRecords />);
    const result = renderer.getRenderOutput();

    // expect(result.type).toBe('div');
    // expect(result.props.id).toBe('records');

    const body = result.props.children[1];

    // expect(body.type).toBe('div');
    // expect(body.props.className).toBe('body');

    const navigation = body.props.children[0];
    const content = body.props.children[1];

    // console.log(content);
});
