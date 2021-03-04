new Vue({
    el: "#root",
    data(){
        return{
            todos: [],
            loading: false,
            newTodo: '',
            submitting: false,
            validTodo: false,
        }
    },
    methods: {
        fetchNotes(){
            this.loading = true;
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const data = response.data;
                this.todos = data;
                this.loading = false;
            })
        },
        addTodo(){
            this.submitting = true;
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: this.newTodo
            })
            .then((response) => {
                const data = response.data;
                this.todos.push(data);
                this.newTodo = ""
                this.submitting = false;
            })
        }
    },
    watch: {
        newTodo: function(newValue){
            if(newValue.length > 5){
                this.validTodo = true
            } else if(newValue.length <= 5){
                this.validTodo = false;
            }
        }
    }
})