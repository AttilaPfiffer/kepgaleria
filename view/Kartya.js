export default class Kartya {
    #obj = {} 
    #szuloElem;

    constructor(obj, szuloElem) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.bandaKiir()
        this.kepElem = $(".kivalaszt:last") 
        this.esemenyKezelo()
    }

    
    
    bandaKiir() {
        this.#szuloElem.append(`
            <div class = "card kivalaszt col-lg-3 col-md-4 col-sm-6">
                <div class = "card-body">
                    <img src = "${this.#obj.kep}" alt = "banda" class = "w-100">
                </div>
            </div>
        `)
    }

    esemenyKezelo() {
        this.kepElem.on("click",() => {
            const e = new CustomEvent("kivalasztott", {detail: this.#obj})
            window.dispatchEvent(e);
        })
    }
}