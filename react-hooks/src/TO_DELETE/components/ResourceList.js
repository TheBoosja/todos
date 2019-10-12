import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
	const resources = useResources(resource);

	return (
		<ul>
			{resources.map((rec, key) => <li key={key}>{rec.title}</li>)}
		</ul>
	);
};

export default ResourceList;
