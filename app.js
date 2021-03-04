new Vue({
    el: '#root',
    data() {
        return{
            fruits: [
                'apple',
                'oranges',
                'grapefruits'
            ],
            currentFruit: ''
        }
    },
    methods: {
        addFruit: function(){
            this.fruits.push(this.currentFruit)
            this.currentFruit = ''; 
        },
        removeFruit: function(index){
            this.fruits.splice(index, 1)
        }
    }
});