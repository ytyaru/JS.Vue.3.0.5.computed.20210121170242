window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const firstName = Vue.ref('');
            const lastName = Vue.ref('');
            return {
                firstName,
                lastName,
            };
        },
        computed: {
            fullName: {
                get() { return this.firstName + ' ' + this.lastName; },
                set(value) {
                    const names = value.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    };
    const app = Vue.createApp(opt).mount('#app');
    app.fullName = 'John Doe';
});
