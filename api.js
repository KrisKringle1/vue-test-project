new Vue({
    el: "#root",
    data(){
        return{
            todos: []
        }
    },
    methods: {
        fetchNotes(){
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const data = response.data;
                this.todos = data;
            })
        }
    }
})