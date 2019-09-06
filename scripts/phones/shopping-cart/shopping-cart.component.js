import {BaseComponent} from "../../shared/components/base.component.js"

export class ShoppingCartComponent extends BaseComponent{
  constructor({element}) {
    super({element});
    this._render()
  }

  _render() {
    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
      </ul>
    `
  }
}