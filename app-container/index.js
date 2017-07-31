class AppContainer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let el = this;
        el.addEventListener('callAPI', (e) => {
            fetch("https://api.nytimes.com/svc/books/v3/lists.json?api-key=40ea26fc62c9450683c5d6183ac81f89&list=hardcover-fiction")
                .then((res) => res.json())
                .then((res) => {

                    let data = Array(res.results)

                    let titles = data[0].map(function(book) {
                        return book.book_details[0].title
                    })


                    el._update(titles)

                });
        });





    }

    _update(titles) {
        let el = this;
        // console.log(el)
        console.log(titles)
        // let appChild = el.querySelector('search-input').shadowRoot.querySelector('#results')
        // appChild.setAttribute('titles', titles)
        // sets text attr to titles of books...now need to update things in the search - input component so it can display
        // console.log(appChild)
    }

}


window.customElements.define('app-container', AppContainer);