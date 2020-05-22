import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import 'index.scss';

export interface DownArrowProps {}

const DownArrow: React.SFC<DownArrowProps> = () => {
	return <FontAwesomeIcon className="down-arrow" icon={faAngleDown} size="5x" color="white" />;
};

export default DownArrow;
