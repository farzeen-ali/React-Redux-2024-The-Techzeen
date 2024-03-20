import {Add_To_Cart} from '../constants'
export const addToCart = (itemData) => {
    console.log("Actions: ", itemData)
    return {
        type: Add_To_Cart,
        data: itemData
    }
}