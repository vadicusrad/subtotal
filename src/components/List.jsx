import React from 'react';
import Card from './Card';

const List = ({ data }) => {
	return (
		<ul className=" container p-4 mx-auto flex flex-col gap-4">
			{data &&
				data.docs.map((launch) => <Card key={launch.id} data={launch} />)}
		</ul>
	);
};

export default List;
