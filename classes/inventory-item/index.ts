export class InventoryItem {
  constructor(private _name: string, private _quantity: number) {}

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  set setName(name: string) {
    this._name = name;
  }

  set setQuantity(quantity: number) {
    this._quantity = quantity;
  }
}
