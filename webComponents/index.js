"use strict";
console.log(1);
window.onload = () => {
    // 初始化无界
    class Wujie extends HTMLElement {
        constructor() {
            super();
            // shadowdom 样式隔离
            let dom = this.attachShadow({ mode: "open" });
            let template = document.querySelector('#wujie');
            dom.appendChild(template.content.cloneNode(true));
            console.log(this.getAttr('url'), this.getAttr('age'));
        }
        getAttr(attr) {
            return this.getAttribute(attr);
        }
        // 生命周期自动触发有东西插入
        connectedCallback() {
            console.log('类似于vue 的mounted');
        }
        // 生命周期卸载
        disconnectedCallback() {
            console.log('类似于vue 的destory');
        }
        // 跟watch类似
        attributeChangedCallback(name, oldVal, newVal) {
            console.log('跟vue 的watch类似 有属性发生变化自动触发');
        }
    }
    // 类似于vue组件 原生js写的一个组件
    window.customElements.define('wu-jie', Wujie); // 挂载完成
};
