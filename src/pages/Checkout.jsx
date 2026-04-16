import { useCart } from "../context/CartContext"

export default function Checkout() {
    const { getCartItemsWithProducts,
         updateQuantity,
          removeFromCart,
           getCartTotal, 
            clearCart,
        } = useCart();
    const cartItem = getCartItemsWithProducts();

    const total = getCartTotal();

    function placeOrder() {
        alert("Order placed, check out our other items if you'd like :)")
        clearCart()
    }

    



    return (
        <div className="page">
            <div className="container">
  <h1 className="checkout-h1">Checkout</h1>
  <div className="checkout-container">
<h2 className="order-summary">Order Summary</h2>
<p className="note">throw away everything you love and say you're sorry without really meaning it, also nothing happens when you place an order</p>
{cartItem.map((item) => (
    <div className="checkout-item" key={item.id}>
        <img
        src={item.product.image}
        alt={item.product.name}
        className="checkout-item-image"
        
        />
        <div>
            <h3>{item.product.name}</h3>
            <p className="card-price">
                ${item.product.price.toFixed(2)} each
                
                </p>
        </div>
        <div>
            <div className="quantity-controls">
                <button className="btn quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                </button>
                <span>{item.quantity}</span>
                <button className="btn quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>
                ${(item.product.price * item.quantity).toFixed(2)}
            </p>
            <button className="btn btn-normal"
             onClick={() => removeFromCart(item.id)}>Remove Item</button>
        </div>
    </div>
))}
  </div>

  <div className="checkout-summary">
    <h2>Total</h2>
    <div>
        <p>Subtotal:</p>
        <p>
            ${total.toFixed(2)}
        </p>
    </div>
    <div>
        <p>Total:</p>
        <p>${total.toFixed(2)}

        </p>
    </div>
    <button className="btn btn-primary" onClick={placeOrder}>
        Place Order
    </button>
  </div>
            </div>
          
        </div>
    )
}