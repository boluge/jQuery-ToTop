<h1>ToTop ajoute au page un bouton de retour en haut de page</h1>
<hr/>
<h3>Voici les différents paramètre du plugin ToTop :</h3>

<p><b>text :</b> le texte ou l'image du lien,<br/>
<b>id :</b> l'id du lien pour pouvoir le personaliser en css,<br/>
<b>speedfade :</b> la vitesse d'affichage et de masquage du lien,<br/>
<b>scroll :</b> la position de scroll à laquelle s'affiche le lien,<br/>
<b>speedscroll :</b> la vitesse de scroll pour remonter en haute de page.<br/>

<p>Le plugin fonctionne avec <b>jQuery</b>.</p>

<code>$(document).totop({
		  text: 'Top',
		  id: 'totop',
		  speedfade:200,
		  scroll:50,
		  speedscroll:'fast'
	});</code>