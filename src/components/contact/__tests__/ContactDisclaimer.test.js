import React from 'react';
import {shallow, mount} from 'enzyme';
import ContactDisclaimer from '../ContactDisclaimer';
import {Form} from 'react-bootstrap'

describe('<ContactDisclaimer />', () => {

	it('shallow renders without crashing', ()=>{
		shallow(<ContactDisclaimer />);
	});

	it('fully renders without crashing', ()=>{
		mount(<ContactDisclaimer />);
	});
})