import React from 'react';
import SuspensePlaceholder from '../SuspensePlaceholder';
import {shallow, mount} from 'enzyme';

describe('<SuspensePlaceholder />', ()=>{
	it('shallow renders without crashing', ()=>{
		shallow(<SuspensePlaceholder />);
	});

	it('fully renders without crashing', ()=>{
		mount(<SuspensePlaceholder/>);
	});
});