//var res = data.split("---");

// 'template' = DIV Container im Index.HTML wird mit dem
// Template gefuellt.
document.getElementById('template').innerHTML = template;

function renderer(template_var, data_var) {
		document.getElementById(template_var).innerHTML = data_var;
}

// Inhalt der DATA.JS in das Template schreiben
renderer("{Ueberschrift}", title);
renderer("{Anleser}",      description);
renderer("{Text}",         maintext);
renderer("{Fusszeile}",    footer);
renderer("{Menue}",        sidebar);
