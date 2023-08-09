import React from 'react';

const Header = ({ currentSort, handleChangeSort }) => {
	return (
		<header className="h-20 w-full bg-blue-950 sticky top-0 text-white z-10">
			<div className="container p-4 mx-auto flex justify-between items-center gap-4">
				<h1 className="text-4xl text-white">SpaceX Launches</h1>
				<div>
					Сортировка по:{' '}
					<select
						className="text-black"
						value={currentSort}
						onChange={handleChangeSort}
					>
						<option value="desc">Убыванию</option>
						<option value="asc">Возрастанию</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
