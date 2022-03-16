import HealthRecords from '../../pages/HealthRecords/HealthRecords';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';


test('Page changes on navigation button click', async () => {
    delete window.location
    window.location = new URL('http://localhost3000/frontend/record/medications');
    
    const renderer = new ShallowRenderer();
    renderer.render(<HealthRecords />);
    const result = renderer.getRenderOutput();
    console.log(result.props.children);
    console.log(result);

    expect(result.type).toBe('div');
});
