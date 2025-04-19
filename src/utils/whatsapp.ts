import { Product } from '../types';

// The WhatsApp phone number of the store owner (should be replaced with the actual number)
const STORE_OWNER_NUMBER = '7907425360';

export const sendWhatsAppOrder = (product: Product, selectedSize: string) => {
  // Format the price in Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price);

  // Format the message with product image
  const message = `
*New Order*
Product: ${product.name}
Price: ${formattedPrice}
Selected Size: ${selectedSize}
Product ID: ${product.id}

Product Image: ${product.image}

Please check the product image using the link above.
  `;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${STORE_OWNER_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
};