window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            return {
                author: {
                    name: '山田',
                    books: [
                        '本１',
                        '本２',
                        '本３',
                    ]
                }
            };
        },
        methods: {
            publishedBooksMessage() {
                return this.author.books.length > 0 ? 'Yes' : 'No';
            }
        }
        /*
        computed: {
            publishedBooksMessage() {
                return this.author.books.length > 0 ? 'Yes' : 'No';
            }
        }
        */
    };
    Vue.createApp(opt).mount('#app');
});
