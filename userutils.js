const USERINFO = 'USER';
const defaultUserInfo = [];
import { findByID } from './utils.js';



//displays to user what is currently in their cart 

export function getUserInfo() {
    const stringyUserInfo = localStorage.getItem(USERINFO);

    if (stringyUserInfo) {
        const parsedUserInfo = JSON.parse(stringyUserInfo);

        return parsedUserInfo;
    }
}

//clears user cart completely
export function clearUser() {
    const emptyUserInfo = JSON.stringify(defaultUserInfo);

    localStorage.setItem(USERINFO, emptyUserInfo);
}


//stringifying your cart - putting item into cart (from cart on computer to cart in local storage)
export function setUserInfo(user) {
    const transformUserInfo = JSON.stringify(user);

    localStorage.setItem(USERINFO, transformUserInfo);
}


// //adds to an existing cart
// export function addToUserInfo(id, quantity) {
//     const cart = getCart();
//     //determines if the new item matches an item that is already in the cart     
//     const cartItem = findByID(id, cart);

//     if (cartItem) {
//         cartItem.quantity + quantity;
//     } else {
//         const newItem = {
//             id: id,
//             quantity: quantity,

//         };

//         cart.push(newItem);
//     }
//     setCart(cart);
// }