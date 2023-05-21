export class InventoryItem {
  constructor(private name: string, private quantity: number) {}

  get getName() {
    return this.name;
  }

  get getQuantity() {
    return this.quantity;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}
