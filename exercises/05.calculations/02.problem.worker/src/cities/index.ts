// 🐨 move all this to a new file at ./filter-cities.worker.ts 👇

// 🐨 move all that to a new file at ./filter-cities.worker.ts 👆

// 🐨 🛑 finish the instructions in ./filter-cities.worker.ts before continuing here...

// 🐨 you're going to want this:
import * as Comlink from 'comlink'
import { type Exposed } from './filter-cities.worker'
// 🐨 import the Exposed type from './fitler-cities.worker'

// 🐨 create a new Worker object out of the ./filter-cities.worker.ts module

// 🐨 create a filterCities object by calling Comlink.wrap with the worker
// 🦺 you can use the Exposed type as the generic for some type safety

// 🐨 export a new searchCities that calls the filterCities.searchCities API with a given input

const worker = new Worker(
	new URL('./filter-cities.worker.ts', import.meta.url),
	{
		type: 'module',
	},
)

const filterCities = Comlink.wrap<Exposed>(worker)

export async function searchCities(input: string) {
	return filterCities.searchCities(input)
}
