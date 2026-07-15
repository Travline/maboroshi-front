import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cartStore";
import { useUiStore } from "../../stores/uiStore";
import "../ToolBar/ToolBar.css";
import type { CartItem } from "../../models/CartItem";

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0459 1.40075L10.6451 0L6.02295 4.62219L1.40075 0L0 1.40075L4.62219 6.02295L0 10.6451L1.40075 12.0459L6.02295 7.4237L10.6451 12.0459L12.0459 10.6451L7.4237 6.02295L12.0459 1.40075Z" fill="currentColor" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.441406 4.93262L4.93262 0.441406L5.375 -2.34949e-07L6.25879 0.883789L5.81738 1.32617L1.76855 5.375L5.81738 9.42383L6.25879 9.86621L5.375 10.75L4.93262 10.3086L0.441406 5.81738L-2.34949e-07 5.375L0.441406 4.93262Z" fill="currentColor" />
    </svg>
  );
}

export function NavCart() {
  const isCartOpen = useUiStore((state) => state.isCartOpen);
  const isInfoOpen = useUiStore((state) => state.isInfoOpen);
  const closeCart = useUiStore((state) => state.closeCart);
  const closeInfo = useUiStore((state) => state.closeInfo);

  // Zustand: Traemos las acciones e items que maneja tu store actual
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  const isOpen = isCartOpen || isInfoOpen;
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  // useEffect que se conecta a la API y sincroniza con tu Zustand Store
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("https://maboroshi-back.onrender.com/v1/cart", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener la información del carrito");
        }

        const data = await response.json();

        // Limpiamos el carrito local actual antes de poblarlo con los datos frescos del servidor
        clearCart();

        // Mapeamos los datos de la API e insertamos usando tu acción addItem
        data.forEach((apiItem: any) => {
          const cartProduct: CartItem = {
            id: apiItem.productId,
            productId: apiItem.productId,
            name: apiItem.productName,
            price: apiItem.salePrice,
            quantity: apiItem.quantity,
            imageUrl: `https://maboroshi-back.onrender.com/images/${apiItem.slug}.jpg`,
            size: apiItem.size || undefined,
          };

          addItem(cartProduct);
        });

      } catch (error) {
        console.error("Error al sincronizar el carrito:", error);
      }
    };

    fetchCartItems();
  }, [addItem, clearCart]); // Dependencias estables de Zustand

  return (
    <>
      <div className="nav-module__5O4h5a__infoPane" style={{ clipPath: isOpen ? "inset(0%)" : "inset(50% 0 50% 0)", transform: "none", pointerEvents: isOpen ? "auto" : "none", }} aria-hidden={!isOpen}>
        {/* Contenido del Carrito */}
        <div data-content="cart" className="nav-module__5O4h5a__infoPaneContent" style={{ opacity: isCartOpen ? 1 : 0, display: isCartOpen ? "block" : "none", }}>
          <div className="cart-module__fB9Kvq__cart">
            <div className="cart-module__fB9Kvq__cartHeader caps dot-array">
              {totalItems > 0 ? `CART (${totalItems})` : "CARRITO"}
              <button type="button" className="cart-module__fB9Kvq__closeButtonDesktop" onClick={closeCart} aria-label="Cerrar carrito">
                <CloseIcon />
              </button>
            </div>

            <div className="cart-module__fB9Kvq__cartMain">
              <div className="cart-module__fB9Kvq__cartItems">
                {items.map((item) => (
                  <div key={item.id} className="cart-module__fB9Kvq__cartItem caps dot-array">

                    <div className="cart-module__fB9Kvq__cartItemImage">
                      <img alt={item.name} loading="lazy" width="80" height="80" src={item.imageUrl} style={{ color: "transparent" }} />
                    </div>

                    <div className="cart-module__fB9Kvq__cartItemDetails">

                      <div>{item.name}</div>{item.size && <div>{item.size}</div>}<div>S/. {item.price.toFixed(1)}</div>

                      <div className="cart-module__fB9Kvq__quantitySelector">

                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>

                        <div className="cart-module__fB9Kvq__quantitySelectorCount">
                          <div style={{ opacity: 1, transform: "none" }}>{item.quantity}</div>
                        </div>

                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-module__fB9Kvq__cartFooter">

              <div className="cart-module__fB9Kvq__cartTotal caps dot-array">
                <span>Total:</span>
                <span>S/.{totalPrice.toFixed(1)}</span>
              </div>

              <Link className="button-module__iDa5sG__button caps dot-array" to="/payment" rel="noopener noreferrer">Pagar ahora</Link>
            </div>

            <button type="button" className="cart-module__fB9Kvq__cartDrawerClose" onClick={closeCart}>
              <span className="sr-only">Cerrar carrito</span>
              <BackIcon />
            </button>
          </div>
        </div>

        {/* Contenido de Info */}
        <div data-content="info" className="nav-module__5O4h5a__infoPaneContent" style={{ opacity: isInfoOpen ? 1 : 0, display: isInfoOpen ? "block" : "none", }}>
          <div className="cart-module__fB9Kvq__cart">
            <div className="cart-module__fB9Kvq__cartHeader caps dot-array">Favoritos<button type="button" className="cart-module__fB9Kvq__closeButtonDesktop" onClick={closeInfo} aria-label="Close info">
              <CloseIcon />
            </button>
            </div>

            <div className="cart-module__fB9Kvq__cartMain" style={{ padding: "3rem 2rem", fontSize: "1.4rem" }}>
              <div style={{ textTransform: "uppercase", marginBottom: "2rem" }} className="dot-array"> Artículos que te gustaron</div>
              <div style={{ opacity: 0.7, lineHeight: "1.6" }}>sapazo</div>
            </div>

            <button type="button" className="cart-module__fB9Kvq__cartDrawerClose" onClick={closeInfo}>
              <span className="sr-only">Cerrar</span>
              <BackIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}