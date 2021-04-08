/**
 * Descrizione
 * Creare uno slider di immagini come visto questa mattina a lezione.
 * Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente:
 * Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
 * Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
 * Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
 * Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
 * 
 * 
 * Bonus
 * Clicchiamo sui pallini e mostriamo l’immagine corrispondente
 */

$(document).ready(function() {

    // References
    var next = $('.next');
    var prev = $('.prev');

    // Navigazione tra le slide con il mouse
    next.click(function() {
        nextPrevSlide('next');
    });

    prev.click(function() {
        nextPrevSlide('prev');
    });

    // Navigazione con keyboard
    $(document).keydown(function(element) {
        // Con questo posso visualizzare il keycode corrispondente al tasto
        // console.log(element.keyCode);

        // If statement per cambiare immagine con le frecce
        // Freccia sinistra
        if (element.keyCode === 37) {
            nextPrevSlide('prev');
        } else if (element.keyCode === 39) {
            nextPrevSlide('next');
        }
    });


    // End doc ready
});

/*******************************
 * FUNCTIONS
 *******************************/

function nextPrevSlide(direction) {
    
    // Refs per le immagini e i cerchi attivi
    var activeImg = $('.images img.active');
    var activeCircle = $('.nav i.active');

    // Reset della classe active
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    // If statement per la parte next
    if (direction === 'next') {
        // If statement per spostare l'active nel caso in cui
        // l'immagine o il cerchio siano gli ultimi, in modo da tornare alla prima
        if (activeImg.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            // Aggiunge la classe active al prossimo elemento
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }
    // Else if per la parte prev
    else if (direction === 'prev') {
        if (activeImg.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
}