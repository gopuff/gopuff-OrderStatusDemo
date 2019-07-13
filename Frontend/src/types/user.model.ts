import Address from './address.model'

export default class User {
  constructor (
        public userId: Number,
        public name: String,
        public email: String,
        public deliveryAddress: Address,
        public billingAddress: Address
  ) {}
}
