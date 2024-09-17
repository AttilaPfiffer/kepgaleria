export default class NagyKartya {
    #obj = {} 
    #szuloElem;

    constructor(obj, szuloElem) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.bandaKiir()
        this.jobbElem = $(".jobb")
        this.jobbElem.on = $("click", () => {this.#esemenyTrigger("jobb")})
        this.balElem = $(".bal")
        this.balElem.on = $("click", () => {this.#esemenyTrigger("bal")})
    }

    
           
            
    
    bandaKiir() {
        console.log(this.#obj)
        this.#szuloElem.append(`
            <button class = "bal col-1">BAL</button>
            <div class = "card col-10">
                <div class = "card-body">
                <h3>${this.#obj.nev}</h3>    
                <img src = "${this.#obj.kep}" alt = "banda" class = "w-100">
                </div>
            </div>
            <button class = "jobb col-1">JOBB</button>
        `)
    }

    #esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev)
        window.dispatchEvent(e);
    }

    

    
}