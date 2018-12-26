class TestWc extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const div = document.createElement('div');

        div.innerHTML = '这是一个测试组件'
        shadow.appendChild(div);
    }
}

customElements.define('test-wc', TestWc);