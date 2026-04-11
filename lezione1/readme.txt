1. canvas_react_to_mouse.html : 
	obiettivo : reazioni da parte di un oggetto disegnato su canvas, agli event del mouse.
	descrizione: su una finestra canvas con contesto 2D viene inizialmente disegnato un rettangolo 
		     arancione. 
		     Viene poi attivata la funzione move_rect() che attende il doppio click del mouse per 
		     attivare lo spostamento di tale rettangolo, ovvero la flag 'moving' viene resa true.
		     L'evento di spostamento del mouse viene sempre registrato, ma viene ignorato finché 
		     la flag non diventa true al click del mouse. 
		     Lo spostamento avviene ridisegnando nelle coordinate corrette (quelle su cui si è 
		     posato il puntatore) il rettangolo e cancellando quello vecchio.
		     Ciò avviene così in fretta, da dare l'idea di movimento.
		     Con un altro doppio click, la flag torna false.


2. canvas_text_dec_draw_raster.html : 
	obiettivo: disegnare la stellina, data come immagine raster jpg su canvas per poter osservare 
		  esplicitamente i comandi che impiega questa operazione;
		  Utilizzo pratico delle modifiche grafiche testuali. 
	descrizione: si crea un canvas con contesto 2D. 
	             Vengono applicate le modifiche grafiche testuali come scelta del font, allineamento 
		     del testo, ecc... 
		
		     Si disegna la stella dentro il canvas attraverso la funzione context.drawImage()
                     in due recuperando l'immagine in due modi diversi:
		     - getElementById -> è necessario dichiarare l'elemento html img e dargli un ID
		     - sourceLink -> si può usare il path dell'immagine png 

		     Le due stelle nel canvas sono sovrapposte, bisogna commentarne una per vedere l'altra.

		     Quella esterna viene invece dichiarata in html, al di fuori del canvas.


3. open_canvas_no_js : 
	Obiettivo: osservare i disegni delle varie figure geometriche su canvas, utilizzando gli strumenti dati dal 
		   context 2D;
                   fare pratica con i buttons e il parametro on_click(); 

	descrizione: Crea un canvas e dichiara 4 buttons.
		     I buttons permettono di disegnare un rettangolo, una curva, una linea e una circonferenza.
		     - il rettangolo viene disegnato con la funzione fillRect();
	             - la curva viene disegnata spostando prima il 'pennello' e utilizzando la funzione 
		       quadraticCurveTo().
		     - la linea viene disegnata spostando primail 'pennello' e utilizzando la funzione lineTo().
		     - la circonferenza viene disegnata utilizzando la funzione arc().

	Note: ogni volta che si vuole disegnare una nuova figura, bisogna segnalare l'inizio di un nuovo 'percorso' 	      con beginPath(). 
	      Una volta pianificato cosa si vuole disegnare, va utilizzata la funzione stroke() , che significa 	      proprio 'dare una pennellata' .
	