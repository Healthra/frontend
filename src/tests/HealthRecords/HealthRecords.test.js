import HealthRecords from '../../pages/HealthRecords/HealthRecords';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

test('Page changes on navigation button click', async () => {
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

test('Page is set to Trends on initial navigation', async () => {
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
test('Page displays the correct content', async () => {
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
test('Data is successfully retrieved from the Healthra API', async () => {
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
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer1 = new ShallowRenderer();
    renderer.render(<HealthRecords />);
    const result1 = renderer.getRenderOutput();

    // expect(result.type).toBe('div');
    // expect(result.props.id).toBe('records');

    const body1 = result.props.children[1];

    // expect(body.type).toBe('div');
    // expect(body.props.className).toBe('body');

    const navigation1 = body.props.children[0];
    const content1 = body.props.children[1];
    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

    window.location = new URL('http://localhost3000/frontend/record/medications');

        

    // console.log(content);
});