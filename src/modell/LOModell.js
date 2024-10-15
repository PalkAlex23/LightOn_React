export default class LOModell {
    #lista = []

    constructor() {
        this.listafeltolt()
    }

    listafeltolt() {
        for (let i = 0; i < 9; i++) {
            let szam = Math.floor(Math.random() * 2)
            if(szam === 0) {
                this.#lista[i] = false
            } else {
                this.#lista[i] = true
            }
        }
        console.log(this.#lista)
    }

    getList() {
        return this.#lista
    }

    lampakapcsol(index) {
        console.log(index)
        if (index === 8) {
            this.#valt(index)
            this.#valt(index-1)
            this.#valt(index-3)
        } else if (index === 7) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-1)
            this.#valt(index-3)
        } else if (index === 6) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-3)
        } else if (index % 3 === 0) {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index+3)
            this.#valt(index-3)
        } else if (index % 3 === 2) {
            this.#valt(index)
            this.#valt(index-1)
            this.#valt(index+3)
            this.#valt(index-3)
        } else {
            this.#valt(index)
            this.#valt(index+1)
            this.#valt(index-1)
            this.#valt(index+3)
            this.#valt(index-3)
        }
    }
    #valt(id){
        if (this.#lista[id] === false) {
            this.#lista[id] = true
        }else {
            this.#lista[id] = false
        }
    }
}