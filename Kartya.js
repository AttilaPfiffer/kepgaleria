export default class Kartya {
    #obj = {} 
    #szuloElem;

    constructor(obj, szuloElem) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.bandaKiir()
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