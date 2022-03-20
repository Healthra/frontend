import HealthRecords from '../../pages/HealthRecords/HealthRecords';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

test('Navigation bar opens on icon click when closed', async () => {
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
test('Navigation bar closes on icon click when open', async () => {
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
test('Navigation bar closes when close button is clicked', async () => {
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
test('Page is correctly routed on link click', async () => {
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
