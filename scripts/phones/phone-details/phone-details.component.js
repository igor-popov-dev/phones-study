import {BaseComponent} from "../../shared/components/base.component.js"

export class PhoneDetailsComponent extends BaseComponent {


  show(phone, onBackButtonClick) {
    this._phone = phone;
    this._render();
    super.show();
    this._element.querySelector('.backButton').addEventListener('click',(e)=>{
      onBackButtonClick();
    })
    const image = this._element.querySelector('.image');
    this._element.querySelector('.imageSamples').addEventListener('click',(e)=>{
      if (e.target.tagName === 'IMG') {
        image.src = e.target.src;
      }
    })
  }

  _render() {
    this._element.innerHTML = `<div>

    <img class="phone image" src="${this._phone.images[0]}">

    <button class="backButton">Back</button>
    <button>Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs imageSamples">
        ${this._phone.images.map((image) => `<li>
        <img src="${image}">
      </li>`).join('')}
    </ul>

  </div>`;
  }
}