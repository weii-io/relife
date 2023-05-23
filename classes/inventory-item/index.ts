export class InventoryItem {
  constructor(private _name: string, private _quantity: number) {}

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }
}
