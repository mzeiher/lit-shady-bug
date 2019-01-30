import { render, html } from "lit-html/lib/shady-render";
import { classMap } from 'lit-html/directives/class-map';

class MyElement extends HTMLElement {

    enabled = false;
    selected = false;
    
    constructor() {
        super()
    }
    
    connectedCallback() {
        if(!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
        }
        this.render();
    }

    render() {
        render(html`
        <style>
            :host {
                display: block;
                padding: 5px;
                background-color: #ff0000;
            }

            :host > .wrapper {
                padding: 5px;
                background-color: #0ff000;
            }

            :host > .wrapper > div >  div {
                padding: 5px;
                background-color: #00ff00;
            }

            :host > .wrapper > div.enabled > div {
                background-color: #f00ff0;
            }

            :host > .wrapper > div.selected > div {
                background-color: #0000ff;
            }
        </style>
        <div class="wrapper">
            <div class="${classMap({enabled: this.enabled, selected: this.selected})}">
                <div>test</div>
            </div>
        </div>
        `, this.shadowRoot, { scopeName: 'my-element'});
    }
}

window.customElements.define('my-element', MyElement);