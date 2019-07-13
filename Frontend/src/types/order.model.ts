/* eslint-disable */
import Product from './product.model';
import User from './user.model';

export default class Order {
    constructor(
        public orderId: number,
        public locationId: number,
        public orderingUser: User,
        public purchases: Product[],
        public eta: Date,
        public status: string,
        public timeForDelivery: {
            from: Date;
            to: Date;
        }
    ) {}
}
