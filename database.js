// query database

const people = [
	{
		id: '001',
		name: 'Luke',
		height: '1.7m',
		mass: '80kg',
		gender: 'male',
		homeworld: 'Tatoweene'
	},
	{
		id: '002',
		name: 'Duke',
		height: '1.8m',
		mass: '70kg',
		gender: 'female',
		homeworld: 'Daygoba'
	},
	{
		id: '003',
		name: 'Nuke',
		height: '1.9m',
		mass: '60kg',
		gender: 'male',
		homeworld: 'Krate'
	},
	{
		id: '004',
		name: 'Muke',
		height: '2.0m',
		mass: '50kg',
		gender: 'female',
		homeworld: 'Heymando!'
	},
	{
		id: '005',
		name: 'Buke',
		height: '2.1m',
		mass: '40kg',
		gender: 'male',
		homeworld: 'Daygoba'
	},
	{
		id: '006',
		name: 'Zuke',
		height: '2.2m',
		mass: '50kg',
		gender: 'female',
		homeworld: 'Tatoweene'
	},
	{
		id: '007',
		name: 'Huke',
		height: '2.3m',
		mass: '60kg',
		gender: 'male',
		homeworld: 'Krate'
	}
]

const resultLimit = 3
const getOffset = page => (page - 1) * resultLimit

const all = (page=1) => {
	// fetch all people
	const offset = getOffset(page)
	return people.slice(offset, offset + resultLimit)
}

const search = (searchParam, page=1) => {
	// search all people
	const offset = getOffset(page)
	return people.filter(({name}) => name.toLowerCase() === searchParam.toLowerCase()).slice(offset, offset + resultLimit)
}

module.exports = {
	all,
	search,
	count: () => Math.ceil(people.length/resultLimit)
}