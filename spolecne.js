// ZADÁNÍ 3
const btnMenu = document.querySelector("#menu-tlacitko")
const itemMenu = document.querySelector("#menu-polozky")
const i = document.querySelector(".fas")

btnMenu.addEventListener("click", () => {
    itemMenu.classList.toggle("show")

 if(itemMenu.classList.contains("show")){
        i.classList.add("fa-xmark")
        i.classList.remove("fa-bars")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bars")
    }
})
// ZADÁNÍ 3

/* 
SLOVNÍ ŘEŠENÍ PRO ZADÁNÍ 3:

1. Vybrala jsem elementy, se kterými se v kódu bude pracovat.
2. Na tlačítko menu, jsem přidala posluchač událostí s eventem click.
3. Na itemMenu jsem přidala třídu show s toggle, která má za úkol rozkliknout menu s položkami.
4.  Podmínka ověřuje, jestli itemMenu obsahuje třídu show, pokud ano změní ikonu na křížek. Jinak udělá opak.
*/