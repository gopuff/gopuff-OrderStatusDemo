export default class Product {
  constructor (
        public productId: number,
        public productName: string,
        public amount: number,
        public price: number,
        public category: string,
        public avatar: {
            small: string,
            thumb: string
            }
  ) {}
}
