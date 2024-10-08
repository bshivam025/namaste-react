import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const selector = useSelector((store) => store.cart.items)

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center'>
            <div className="flex flex-row items-center justify-center text-center">
                <h3 className="header-title font-bold text-2xl p-4 mt-5">
                    YOUR CART ({selector.length})
                </h3>
                <button onClick={handleClearCart} className="ml-4 mt-5 bg-red-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Clear
                </button>
            </div>


            <div className='w-3/6 m-auto border'>
                {selector.length === 0 ? (
                    <h1 className="text-2xl p-4">Cart is Empty</h1>
                ) : (
                    <ItemList items={selector} />
                )}
            </div>

        </div>

    )
}

export default Cart;