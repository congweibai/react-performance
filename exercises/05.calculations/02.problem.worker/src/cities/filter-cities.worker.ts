// 🐨 you're gonna need this:
import * as Comlink from 'comlink'
import cities from './us-cities.json'
import { matchSorter } from 'match-sorter'
// 🐨 move the stuff that's in index.ts into this file.

// 🐨 create an object called "exposed" that has searchCities in it
// 🐨 call Comlink.expose with the exposed object
// 🦺 create and export a type called "Exposed" that is "typeof exposed"
//   (you'll need this to get nice type safety in the main thread)
// 💰 export type Exposed = typeof exposed

const allCities = cities.map((city, index) => ({ ...city, id: String(index) }))

export function searchCities(filter: string) {
	return matchSorter(allCities, filter, { keys: ['name'] })
}

const exposed = { searchCities }
Comlink.expose(exposed)
export type Exposed = typeof exposed
