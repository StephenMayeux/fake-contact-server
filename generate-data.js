const faker = require('faker')
const _ = require('lodash')

module.exports = () => {
    const contacts = _.times(100, id => {
        return {
            id,
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email()
        }
    })

    return { contacts }
}