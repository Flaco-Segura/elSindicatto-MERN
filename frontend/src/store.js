import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { discListReducer, discDetailsReducer } from './reducers/discReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    discList: discListReducer,
    discDetails: discDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const initialState = { cart: { cartItems: cartItemsFromStorage }}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
