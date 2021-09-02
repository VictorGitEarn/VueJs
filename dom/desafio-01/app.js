new Vue({
    el: '#desafio',
    data: {
        nome: 'Victor Alves',
        idade: 28,
        linkImg: 'https://i.pinimg.com/originals/74/b0/b0/74b0b07772a65a58b4de3712627132b6.png'
    },
    methods: {
        idadeMultiplicada() {
            return this.idade * 3
        }
    }
})