class SearchButton extends HTMLElement {
    constructor() {
        super();
        let el = this;
        let btn_text = this.dataset['text'];
        this.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            el._callAPI()
        });



        // console.log(btn_text)
        const shadowRoot = el.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
		<!-- styles are scoped to search-button elememt -->
		<style>

		</style>
		<button>${btn_text}</button>

		`


    }


    _callAPI() {
        let el = this;

        let event = new CustomEvent('callAPI', {
            bubbles: true,
            composed: true
        });

        el.dispatchEvent(event);
    }


}

window.customElements.define('search-button', SearchButton);