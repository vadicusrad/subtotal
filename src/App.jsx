import React, { useEffect, useState } from 'react';
import './app.css';
import { useGetLaunchesQuery } from './redux';
import List from './components/List';
import Header from './components/Header';

function App() {
	// стейт с параметрами запроса
	const [currentObjParams, setCurrentObjParams] = useState({
		query: {
			success: true,
			date_utc: {
				$gte: '2015-01-01T00:00:00.000Z',
				$lte: '2019-01-01T00:00:00.000Z',
			},
		},
		options: {
			pagination: false,
			sort: {
				date_utc: 'desc',
			},
		},
	});
	// текущий способ сортировки
	const [currentSort, setCurrentSort] = useState('desc');

	// получение данных из хука запроса. Остальные возможности типа error сейчас не использую, но знаю что есть.
	const { data = [], isLoading } = useGetLaunchesQuery(currentObjParams);

	// изменение параметров запроса в зависимости от выбранного способа сортировки. Иницирует повторный запрос на сервер.
	useEffect(() => {
		// создаю промежуточный обьект, в котором будут храниться новые параметры запроса
		const paramsOptionsSort = {
			...currentObjParams.options.sort,
			date_utc: currentSort,
		};
		const newParamsObj = {
			...currentObjParams,
			options: { ...currentObjParams.options, sort: paramsOptionsSort },
		};

		// обновление стейта с параметрами запроса
		setCurrentObjParams(newParamsObj);
	}, [currentSort]);

	// функция переключения типа сортировки
	function handleChangeSort() {
		currentSort === 'desc' ? setCurrentSort('asc') : setCurrentSort('desc');
	}

	// Отображение загрузки, до получения данных
	if (isLoading) {
		return <h1 className="text-4xl text-center mt-20">Loading...</h1>;
	}

	return (
		<div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-blue-900 to-90%">
			<Header data={data} handleChangeSort={handleChangeSort} />
			<main>
				<List data={data} />
			</main>
		</div>
	);
}

export default App;
