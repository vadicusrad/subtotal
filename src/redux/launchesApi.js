/* eslint-disable import/no-extraneous-dependencies */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
	reducerPath: 'launchesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/v4',
	}),
	endpoints: (build) => ({
		getLaunches: build.query({
			query: (obj) => ({
				url: '/launches/query',
				body: obj,
				method: 'POST',
			}),
		}),
	}),
});

export const { useGetLaunchesQuery } = launchesApi;
