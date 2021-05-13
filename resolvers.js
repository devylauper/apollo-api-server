
const {all, search, count} = require('./database')
module.exports = {
	Query: {
		people: (_parent, {page=1}, _context, _info) => {
			return all(page)
		},
		search: (_parent, {name, page=1}, _context, _info) => {
			return search(name, page)
		},
		count
	},
	Person: {
		id: person => person.id,
		name: person => person.name,
		height: person => person.height,
		mass: person => person.mass,
		gender: person => person.gender,
		homeworld: person => person.homeworld
	}
}