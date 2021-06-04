import faker from 'faker'

const messages = `<div>You have ${faker.random.number()}</div>`

document.querySelector('#dev-cart').innerHTML = messages
