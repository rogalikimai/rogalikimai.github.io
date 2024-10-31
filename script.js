function showModal(title,text) {
    let element=
     `<div id="modalcontainer">
        <div id="modal" style="overflow-y:scroll;overflow-x:hidden;">
            <h2 style="float: left; width: 60%;">${title}</h2>
            <svg onclick='document.querySelector("#modalcontainer").remove()' style="float: right; margin:5px; cursor:pointer" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            <hr style="clear: both;">
            ${text}
        </div>
    </div>`;
    document.body.innerHTML = element += document.body.innerHTML;
}
if (window.location.href.endsWith("index.html")) {

showModal("Pliki <span class='rogalowy'>ROGAL</span>iki","Ta witryna używa <span class='rogalowy'>plików rogalików</span> aby zapewnić ci najlepsze wrażenia podczas korzystania z niej.");
}
let polityka = document.querySelector('#polityka');
polityka.addEventListener('click',()=>{
    showModal("Polityka Rogalikowości",`<ol><li>Do fan klubu "Rogaliki Mai" może dołączyć każdy - niezależnie od rasy, płci itd.</li><li>Szerzenie informacji szkodliwych, obrażających fan klub "Rogaliki Mai" lub jednego lub więcej członków fan klubu poskutkuję karą śmierci</li><li>Osoby, które chcą opuścić fan klub "Rogaliki Mai" będą zostaną poddane karze chłosty - 50 uderzeń</li><li>Twoje dane nie będą przetwarzane, o ile nie zrobisz czegoś głupiego (w rozumieniu: śmiesznego), wtedy ta sytuacja będzie rozpisywana na group chatach, być może nawet zostanie udostępniona jako post na stronie</li><li>Każdy członek musi przynajmniej raz w miesiącu zjeść rogalika - zaleca się 2 razy w tygodniu</li><li>Wszyscy członkowie mają obowiązek używania słów "rogalik" lub "Rogalikowość" przynajmniej raz dziennie w rozmowach. Nieprzestrzeganie tego punktu skutkuje w karze chłosty - 3 uderzenia</li></ol>
        `);
})
let burgerbtn = document.querySelector("#burger");
burgerbtn.addEventListener('click', () => {
    console.log("Hi");
    let smc = document.querySelector("#smcontainer");
    
    if (!smc) {
        let element = document.createElement('div');
        element.id = 'smcontainer';
        element.innerHTML = `
            <div id="sm">
                <svg onclick='document.querySelector("#smcontainer").remove()' style="float: right; margin:5px; cursor:pointer" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <ul id="sidemenubuttons">
                ${document.querySelector("#menu").innerHTML}
                </ul>
            </div>
        `;
        document.body.prepend(element);
    }
});