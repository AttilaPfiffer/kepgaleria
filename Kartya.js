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
            <div class = "card">
                <div class = "card-body-lg-4 col-md-6">
                    <h3 class = "card-title">${this.#obj.nev}</h3>
                    <img src = "${this.#obj.kep}" alt = "banda">
                    <p>${this.#obj.leiras}</p>
                </div>
            </div>
        `)
    }
}