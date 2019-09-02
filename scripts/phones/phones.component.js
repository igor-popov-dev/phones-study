import {PhonesCatalogComponent} from "./phones-catalog/phones-catalog.component.js";
import {PhonesService}          from "./phone.service.js";
import {PhoneDetailsComponent}  from "./phone-details/phone-details.component.js"

export class PhonesComponent {
  constructor({element}) {
    this._element = element;
    this._render();
    this._catalog = new PhonesCatalogComponent({
      element: this._element.querySelector('.phones-catalog'),
      phones: PhonesService.getAll(),
      onPhoneSelect: (phoneId) => {
        const phoneDetails = PhonesService.getOneById(phoneId);
        this._catalog.hide();
        this._details.show(phoneDetails);
      }
    });

    this._details = new PhoneDetailsComponent({
      element: this._element.querySelector('.phone-details')
    })
  }

  _render() {
    this._element.innerHTML = `<div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section>
                <p>
                    Search:
                    <input>
                </p>

                <p>
                    Sort by:
                    <select>
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>
            </section>

            <section>
                <p>Shopping Cart</p>
                <ul>
                    <li>Phone 1</li>
                    <li>Phone 2</li>
                    <li>Phone 3</li>
                </ul>
            </section>
        </div>

        <!--Main content-->
        <div class="col-md-10">
            <div class="phones-catalog"></div>
            <div class="phone-details"></div>
        </div>
    </div>`;
  }
}