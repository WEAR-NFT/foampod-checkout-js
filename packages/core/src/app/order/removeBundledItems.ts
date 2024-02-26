import { LineItemMap, PhysicalItem } from '@bigcommerce/checkout-sdk';

export default function removeBundledItems(lineItems: LineItemMap): LineItemMap & { subItems?: PhysicalItem[] } {
    return {
        ...lineItems,
        physicalItems: lineItems.physicalItems.filter((item) => typeof item.parentId !== 'string'),
        subItems: lineItems.physicalItems.filter((item) => typeof item.parentId === 'string'),
        digitalItems: lineItems.digitalItems.filter((item) => typeof item.parentId !== 'string'),
    };
}
