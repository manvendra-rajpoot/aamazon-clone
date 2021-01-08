export const initialState ={
    cart: [],
    user: null,
};

//selector
export const getCartTotAmt = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (CartItem) => CartItem.id === action.id
            );
            let newCart = [...state.cart];

            if(index > -1){
                newCart.splice(index,1)
            } else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in Cart!`
                )
            }
            return {
                ...state,
                cart: newCart,
            };

        case 'SET_USER':
                return {
                    ...state,
                    user: action.user,
                };
        default:
            return state;
            
    }
};

export default reducer;
