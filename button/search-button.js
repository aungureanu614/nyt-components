class SearchButton extends aButton {
    constructor() {
        super();
        let el = this;
        
    }

    connectedCallback(){
        let el = this.shadowRoot.querySelector('button');
        let btn_text = this.dataset['text'];
        el.innerText = btn_text;
        // console.log(el)
    }

}

window.customElements.define('search-button', SearchButton);