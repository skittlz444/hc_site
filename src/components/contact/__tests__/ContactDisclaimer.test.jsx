import React from 'react';
import {shallow, mount} from 'enzyme';
import {Form} from 'react-bootstrap';

import ContactDisclaimer from '../ContactDisclaimer';

describe('<ContactDisclaimer />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<ContactDisclaimer />);
	});

	it('fully renders without crashing', ()=>{
		mount(<ContactDisclaimer />);
	});
});