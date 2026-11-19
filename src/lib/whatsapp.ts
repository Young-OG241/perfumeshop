import type { Product } from '@/data/products';

export type CartLine = { product: Product; quantity: number };
export type Fulfilment = 'delivery' | 'pickup';

export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '33753644638';
  return raw.replace(/\D/g, '');
}

export function buildWhatsAppUrl(lines: CartLine[], fulfilment: Fulfilment, customerName = '', address = ''): string {
  const fee = Number(process.env.NEXT_PUBLIC_DELIVERY_FEE || 20);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const delivery = fulfilment === 'delivery' ? fee : 0;
  const total = subtotal + delivery;
  const money = (amount: number) => `GH₵${amount.toFixed(2)}`;
  const items = lines.map(({ product, quantity }) => `• ${product.name} × ${quantity} — ${money(product.price * quantity)}`).join('\n');
  const message = [
    'Bonjour La Petite Boutique de Lo ! ✨',
    '',
    'Je souhaite commander :',
    items,
    '',
    `Sous-total : ${money(subtotal)}`,
    `Mode de réception : ${fulfilment === 'delivery' ? 'Livraison' : 'Retrait sur place'}`,
    ...(fulfilment === 'delivery' ? [`Frais de livraison : ${money(delivery)}`] : []),
    `TOTAL : ${money(total)}`,
    ...(customerName ? [`Nom : ${customerName}`] : []),
    ...(fulfilment === 'delivery' && address ? [`Adresse de livraison : ${address}`] : []),
    '',
    'Merci de me confirmer la disponibilité et les modalités de paiement.'
  ].join('\n');
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
}
