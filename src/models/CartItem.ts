export interface CartItem {
  id: string;          // Identificador
  productId: string;   // ID del producto en el catalogo
  name: string;        // Nombre del producto
  size?: string;       // Talla o variante seleccionada
  price: number;       // Precio unitario
  quantity: number;    // Cantidad en el carrito
  imageUrl: string;    // URL de la imagen del producto
}
