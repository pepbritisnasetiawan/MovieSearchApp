class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
            header {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              padding: 20px 50px;
              box-shadow: 0 1px 8px #ddd;
            }

            #nav-title {
              margin-right: auto;
              font-size: 1.5em;
            }

            header li {
              list-style: none;
              display: inline-block;
              padding: 0 20px;
            }

            header a {
              text-decoration: none;
              color: #555;
              transition: all 0.3s ease 0s;
            }

            header a:hover {
              color: #b2dfdb;
            }
          </style>
          <header>
            <h1 id="nav-title"><a href="#">Movies Database</a></h1>
            <nav>
              <ul>
                <li><a href="#">Whatchlists</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Favorites</a></li>
              </ul>
            </nav>
          </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
