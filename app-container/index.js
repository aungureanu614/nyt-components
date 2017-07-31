class AppContainer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let el = this;
        el.addEventListener('click', (e) => {
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
        let appChild = el.childNodes[3]
        appChild.setAttribute('titles', titles)
        // sets attr of titles to the titles received from the api...now need to display the info in display-books component
        console.log(el.childNodes)
    }

}


window.customElements.define('app-container', AppContainer);