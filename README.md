Voici les différents paramètre du plugin :

<b>text :</b> le texte ou l'image du lien,</br>
id : l'id du lien pour pouvoir le personaliser en css,
speedfade : la vitesse d'affichage et de masquage du lien,
scroll : la position de scroll à laquelle s'affiche le lien, 
speedscroll : la vitesse de scroll pour remonter en haute de page.

	$(document).totop({
		  text: 'top',
		  id: 'top',
		  speedfade:1000,
		  scroll:50,
		  speedscroll:1500
	});