class DisplayBooks extends HTMLElement{
	constructor(){
		super();

		let el = this;
		const shadowRoot = el.attachShadow({mode: 'open'});

		shadowRoot.innerHTML = `
		<!-- styles are scoped to search-button elememt -->
		<style>

		</style>
		<div></div>

		`
	}

}

window.customElements.define('display-books', DisplayBooks);