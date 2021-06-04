import faker from 'faker'

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 10; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

// Running in isolation (Context 1)
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')
    if (el) {
        mount(el)
    }
}

// Running in Container app (Context 2)
export { mount }
