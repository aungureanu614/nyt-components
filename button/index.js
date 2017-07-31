class aButton extends HTMLElement {
    constructor() {
        super();
        let el = this;
        // let btn_text = this.dataset['text'];



        // console.log(btn_text)
        const shadowRoot = el.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
		<!-- styles are scoped to button elememt -->
		<style>

		</style>
		<button></button>

		`


    }

}

window.customElements.define('a-button', aButton);