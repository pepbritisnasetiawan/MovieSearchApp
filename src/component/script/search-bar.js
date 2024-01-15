class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setClickEven(event) {
    this._clickEvent = event;
    this._render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <nav class="navbar bg-body-tertiary">
        <div class="container m-5 justify-content-center">
          <form class="d-flex" role="search" id="input-keyword">
            <input
              class="form-control form-control-lg me-2 input-keyword"
              type="text"
              placeholder="Search Movie"
              id="searchElement"
            />
            <button class="btn btn-outline-success search-btn" type="button" id="searchButtonElement">
              Search
            </button>
          </form>
        </div>
      </nav>
    `;

    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
