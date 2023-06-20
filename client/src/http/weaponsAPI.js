import { $authHost,$host } from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type' )
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/weapon', product)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/weapon' )
    return data
}

// `export const fetchProducts = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/weapon', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }`

export const fetchOneProducts = async (id) => {
    const {data} = await $host.get('api/weapon/' + id )
    return data
}