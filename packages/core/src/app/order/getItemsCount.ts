import { LineItemMap } from '@bigcommerce/checkout-sdk';

export default function getItemsCount({
    physicalItems,
    digitalItems,
    giftCertificates,
    customItems,
}: LineItemMap): number {
    const actualPhysicalItems = physicalItems.filter((item) => typeof item.parentId !== 'string');
    const totalItemsCount = [...actualPhysicalItems, ...digitalItems, ...(customItems || [])].reduce(
        (total, item) => (total += item.quantity),
        0,
    );

    return totalItemsCount + giftCertificates.length;
}
