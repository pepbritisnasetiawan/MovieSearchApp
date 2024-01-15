class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" id="carousel-inner"></div>
          </div>
        `;
  }
}

customElements.define('carousel-bar', Carousel);
