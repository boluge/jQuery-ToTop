<h2>Voici les différents paramètre du plugin ToTop :</h2>

<p><b>text :</b> le texte ou l'image du lien,</p>
<p><b>id :</b> l'id du lien pour pouvoir le personaliser en css,</p>
<p><b>speedfade :</b> la vitesse d'affichage et de masquage du lien,</p>
<p><b>scroll :</b> la position de scroll à laquelle s'affiche le lien, </p>
<p><b>speedscroll :</b> la vitesse de scroll pour remonter en haute de page.</p>

	$(document).totop({
		  text: 'top',
		  id: 'top',
		  speedfade:1000,
		  scroll:50,
		  speedscroll:1500
	});