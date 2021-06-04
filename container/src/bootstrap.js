import { mount as productMount } from 'productsApp/ProductsIndex'
import { mount as cartMount } from 'cartApp/CartShow'

productMount(document.querySelector('#products'));
cartMount(document.querySelector('#cart'));
