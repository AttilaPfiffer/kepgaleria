export default class Kartya {
    #obj = {} 
    #szuloElem;

    constructor(obj, szuloElem) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.bandaKiir()
        //this.elsoBanda()
    }

    elsoBanda() {
        this.#szuloElem.append(`
            <div class = "card col-lg-3 col-md-6">
                <div class = "card-body">
                    <h3 class = "card-title">${this.#obj[0].nev}</h3>
                    <img src = "${this.#obj[0].kep}" alt = "banda">
                    <p>${this.#obj[0].leiras}</p>
                </div>
            </div>
        `)
    }
    
    bandaKiir() {
        this.#szuloElem.append(`
            <div class = "card col-lg-3 col-md-6">
                <div class = "card-body">
                    <h3 class = "card-title">${this.#obj.nev}</h3>
                    <img src = "${this.#obj.kep}" alt = "banda">
                    <p>${this.#obj.leiras}</p>
                </div>
            </div>
        `)
    }
}