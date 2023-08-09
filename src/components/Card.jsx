import React from 'react';

const Card = (launch) => {
	const { name, date_utc, details } = launch.data;

	return (
		<div className="flex p-8 bg-indigo-900 rounded text-white bg-white bg-opacity-20 backdrop-blur-lg z-1">
			<img
				className="w-52 h-52"
				src={launch.data.links.patch.small}
				alt={`Image of ${name}`}
			/>
			<div className="ml-8">
				<h2 className="text-3xl ">Название миссии: {name}</h2>
				<h3 className="text-2xl mt-4">
					Дата запуска: {date_utc.substr(0, 10)}
				</h3>
				<p className="text-xl mt-4">Информация о запуске: {details}</p>
			</div>
		</div>
	);
};

export default Card;
