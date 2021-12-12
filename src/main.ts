import * as Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    console.error('Шняга завелась');
    const app = Vue.createApp({
        template: `<input>`
    });
    
    app.mount('#app');
});
