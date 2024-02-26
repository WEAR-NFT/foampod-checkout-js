import { PhysicalItem } from '@bigcommerce/checkout-sdk';

import getOrderSummaryItemImage from './getOrderSummaryItemImage';
import { OrderSummaryItemProps } from './OrderSummaryItem';

function mapFromPhysical(item: PhysicalItem): OrderSummaryItemProps {
  const [name, color] = item.name.split('|');

  return {
    id: item.id,
    quantity: item.quantity,
    amount: item.extendedComparisonPrice,
    amountAfterDiscount: item.extendedSalePrice,
    name,
    color,
    image: getOrderSummaryItemImage(item),
    description: item.giftWrapping ? item.giftWrapping.name : undefined,
    productOptions: (item.options || []).filter((item) => item.name !== '').map((item) => (
      {
        testId: 'cart-item-product-option',
        content: item.name,
      }
    )),
  };
}

export default mapFromPhysical;
