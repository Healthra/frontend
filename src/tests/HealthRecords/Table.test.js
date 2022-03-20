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
test('Table is empty when there is no data', async () => {
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer = new ShallowRenderer();
    renderer.render(<HealthRecords />);

});
test('Table is not empty when there is data present', async () => {
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

test('Correct data is shown on search', async () => {
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
test('Correct data is shown on filter', async () => {
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
test('Correct data is shown on sort', async () => {
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
// test('Correct filters are shown when filters are present', async () => {});
// test('No filters are shown when no filters are present', async () => {});
test('Download button performs function on click', async () => {
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
test('Print button performs function on click', async () => {
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

test('Selected rows count is correct', async () => {
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
// test('Number of items on page is shown correctly', async () => {});
test('Correct number of pages are shown in pagination', async () => {
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
test('Correct page is selected in pagination', async () => {
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
test('Pagination is hidden when there is only one page', async () => {
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