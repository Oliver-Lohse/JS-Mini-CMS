# js-mini-cms
Ziel dieses Projektes ist, eine HTML-Dokumentation zu schaffen die auch **ohne Webserver**, **offline** mit Hilfe von **Templates** funktionsfähig ist. 

Das JavaScript Struktur CMS ist ein relativ logikloses CMS auf Basis von JavaScript. Das kleine CMS profitiert von der Tatsache, immer gleichförmige Strukturen statt Logik vorzuziehen. Das CMS wird einfach über den Aufruf der jweiligen `index.html` aufgerufen. Aufgrund der immer gleichförmigen Strukturen, ist es ideal für den Einsatz in Generatoren geeignet.

## data-content.js
Die Datei `data-content.js` liegt in jedem Ordner und Unterordner und nimmt den eigentlichen Content des Beitrags auf. Es handelt sich um den Content um eine fest vorgegebene Array-Variable. Die Variablen `title`, `description` und `maintext` dürfen nicht verändert werden.

## data-sidebar.js
Die Datei `data-sidebar.js` bildet das spezifische Seitenmenü des Ordners bzw. des Unterordners ab. In dieser Array-Variablen werden die weiterführenden Menüs und Links abgelegt. Die Variable `sidebar` ist fest vergeben und darf nicht verändert werden.

## data-footer.js
Die spezifische Footer-Datei `data-footer.js` nimmt für jeden Ordner und Unterordner Footer-Informationen auf. In den meisten Fällen ist es jedoch sinnvoller einen Footer an oberster Ebene zu definieren und immer genau diesen in der `index.html` zu includieren. Die Variable `footer` ist fest vom System vergeben und darf nicht geändert werden.

>Tipp: Da dieses kleine CMS simple JS Arrays nutzt, sollte man sich den Backslash zu nutze machen, um Umbrüche in den Zeilen zu ermöglichen.

## template/template-default.js
Bei dieser JS-Datei handelt es sich um das Standardtemplate der Anwendung. In dieser Datei liegt die feste Systemvariable `template`, die nicht geändert werden darf.

## scripts/renderer.js
Der Renderer ist das zentrale Element in diesem kleinen JS CMS. Die Datei `renderer.js` wird aus allen `index.html` (egal in welchem Ordner oder Unterordner) geladen, um das Template und die einzelnen data-Files aufzulösen.
