class DisplayBooks extends HTMLElement{
	constructor(){
		super();

		let el = this;
		const shadowRoot = el.attachShadow({mode: 'open'});
		el.text = el.getAttribute('titles');
		shadowRoot.innerHTML = `
		<!-- styles are scoped to search-button elememt -->
		<style>

		</style>
		<div id="results">${el.text}</div>

		`
	}

		static get observedAttributes() {

		return ['titles']; }

	attributeChangedCallback(attr, oldVal, newVal){
			let el = this;
		  console.log(el)
		  if (attr === 'titles') { 
	
			 console.log(newVal)
			 el._updateElement(el.shadowRoot.childNodes[5], newVal);
		}
	}



	_updateElement(element, data) {
		let el = this;
		element.innerHTML = data;


	}

}

window.customElements.define('display-books', DisplayBooks);