import { useEffect, useState } from 'react';
import { useProductStore } from '../store/useProductStore';
import { ProductCard } from '../components/ProductCard';
import { Modal } from '../components/Modal';

export function StorePage() {
  const products = useProductStore((state) => state.products);
  const cart = useProductStore((state) => state.cart);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const clearCart = useProductStore((state) => state.clearCart);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const totalPrice = (cart || []).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = (cart || []).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Fixed Bottom Bar */}
      {cart && cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl flex justify-between items-center z-50">
          <div className="text-lg font-bold">
            Items: <span className="text-blue-400">{cartCount}</span> | Total: <span className="text-green-400">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-bold transition-colors"
          >
            Checkout
          </button>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Modal
          isOpen={isCheckoutOpen}
          title="Order Receipt"
          onClose={() => {
            setIsCheckoutOpen(false);
            clearCart();
          }}
        >
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.title} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="text-xl font-bold text-right pt-4 text-green-600">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}