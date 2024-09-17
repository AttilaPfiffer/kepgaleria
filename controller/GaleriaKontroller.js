import Jatekter from "./view/Jatekter.js";
import { adatok } from "../model/adatok.js";
import NagyKartya from "./view/NagyKartya.js";
import Model from "./model/Model.js";

export default class GaleriaKontroller {

    constructor() {

        
        // controller - példányosítja a modelleket, a viewet, és feliratkozik az eseménykezelőkre.
        // view - csak az adatokat jeleniti meg.
        // model - kiszámolja a program következő állapotát. 
        // példányosítjuk a modelt

        this.modell = new Model(adatok)

        this.taroloElem = $(".mezo");
        this.kivElem = $(".kivalasztott")
        this.index = 0;
        new NagyKartya(adatok[0], kivElem)
        new Jatekter(adatok, taroloElem)




        $(window).on("kivalaszt", (event) => {
            kivElem.empty()
            modell.setIndex(event.detail.id)
            new NagyKartya(event.detail, kivElem)
        })

        $(window).on("jobb", (event) => {
            let index = modell.leptetJobb()
            kivElem.empty()
            new NagyKartya(adatok[index], kivElem)
        })

        $(window).on("bal", (event) => {
            let index = modell.leptetBal()
            kivElem.empty()
            new NagyKartya(adatok[index], kivElem)
        })
    }
}