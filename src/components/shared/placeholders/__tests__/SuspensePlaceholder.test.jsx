import React from 'react';
import {shallow, mount} from 'enzyme';

import SuspensePlaceholder from '../SuspensePlaceholder';

describe('<SuspensePlaceholder />', ()=>{
	it('shallow renders without crashing', ()=>{
		shallow(<SuspensePlaceholder />);
	});

	it('fully renders without crashing', ()=>{
		mount(<SuspensePlaceholder/>);
	});
});