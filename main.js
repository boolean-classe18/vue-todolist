var app = new Vue({
    el: "#root",
    data: {
        todo_list: [
            {
                text: 'fare la spesa',
                date: '12/11/2020'
            },
            {
                text: 'chiamare il dentista',
                date: '13/11/2020'
            },
            {
                text: 'studiare vue.js',
                date: '15/11/2020'
            }
        ],
        new_todo: ''
    },
    methods: {
        aggiungi_todo() {
            // costruisco un nuovo oggetto per il nuovo todo
            let nuovo_todo = {
                text: this.new_todo,
                date: '12/11/2020'
            };
            // inserisco il todo nella lista
            this.todo_list.push(nuovo_todo);
            // resetto l'input
            this.new_todo = '';
        },
        rimuovi_todo(indice_todo) {
            // rimuovo dall'array l'elemento in posizione indice_todo
            this.todo_list.splice(indice_todo, 1);
        }
    }
});
