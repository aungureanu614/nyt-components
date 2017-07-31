class SearchButton extends aButton {
    constructor() {
        super();
        let el = this;
        
        this.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            // el._callAPI()
           
            console.log("in search-button")
        });
    }

    connectedCallback(){
        let el = this.shadowRoot.querySelector('button');
        let btn_text = this.dataset['text'];
        el.innerText = btn_text;
        // console.log(el)
    }

}

window.customElements.define('search-button', SearchButton);