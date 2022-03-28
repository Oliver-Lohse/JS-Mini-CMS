<!-- ------------------------------------------------------------------------------------------------------------- -->
<!-- Die Datei data-content.js nimmt den eigentlichen Text-Inhalt auf. Der Inhalt ist unveränderlichen JS-         -->
<!-- Variable zugewiesen, diese dürfen nicht verändert werden! Für eine leichtere Formatierung des Textes können   -->
<!-- die im JS üblichen Umbrüche mit \ oder + verwendet werden.                                                    -->
<!--                                                                                                               -->
<!-- Tipp:                                                                                                         -->
<!-- =====                                                                                                         -->
<!-- Sie müssen nicht zwingen die lokale data-content.js laden, Sie können auch die data-content.js aus einem      -->
<!-- übergeordneten Verzeichnis statt dessen laden. Stellen Sie dies in der HEAD-Section der index.html ein.       -->
<!-- ------------------------------------------------------------------------------------------------------------- -->

var title = 
	"templates-*.js";

var description = 
	"Eine auf JS basierte mini Template-Engine für den Einsatz als Offline-Dokumentation oder in sehr kleinen Projekten";

var maintext = 
	"<h3>templates-*.js</h3>\
	<p>In der Demoversion liegen die beiden Templates (<code>template-default.js template-no-sidebar.js</code>) in einer \
	übergeordneten Verzeichnisstruktur und sind für alle Unterverzeichnisse nutzbar die diese Templates einhängen möchten. \
	Sie können weitere Templates auf Basis von Bootstrap erzeugen.</p>\
	\
	<p>Templates geben dem Redakteur die M&ouml;glichkeit unterschiedliche Farb- und Unternehmens-Styles zu setzen. Dadurch \
	ist es m&ouml;glich unterschiedliche Clients zu bedienen.</p>"
	+bst_004_templates;