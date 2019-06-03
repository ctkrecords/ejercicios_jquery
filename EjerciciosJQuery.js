$(document).ready(function () {
    
    
    //Seleccionar todos los elementos div que poseen la clase "module".
    $("div.module");

    //Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
    $(":hidden").length;

    //Seleccionar todas las filas impares del cuerpo de la tabla.
    $("tr:odd");

    
    //Añadir 5 nuevos ítems al final de la lista desordenada #myList. Ayuda:
    for (var i = 0; i<5; i++) {
        $("#myList").append("<li>Nuevo elto. agregado a #myList número: "+(i+1)+"</li>");
    }

    
    //Remover los ítems impares de la lista.
    $("#myList :odd").remove();

    
    //Añadir otro elemento h2 y otro párrafo al último div.module.
    $("div.module:last").append(
        "<h2>Nuevo elto. h2</h2>"+
        "<p>Nuevo párrafo agregado</p>"
    );

    
    //Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday". **
    $("select").append(
        "<option value='wednesday'>Wednesday</option>"
        );
    
    
    //Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div. **
    $("div.module:last").append("<div class='module'></div>");
    $("#slideshow img:first").clone().appendTo("div.module:last");
        

    
    //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    $("input").closest("form").addClass("nuevaClaseFormularios");

    //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    var $elto = $("#myList .current");
    var $pos = $elto.index()+1;
    var $siguiente = $("ul#myList li").eq($pos);

    $elto.removeClass("current")
    .after($siguiente.addClass("current"));
    
    //Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos. **
    var $primerElto = $("ul#slideshow li:first"); 
    var $hermanos = $primerElto.siblings();

    $primerElto.addClass("current")
    .after($hermanos.addClass("disabled"));
    
    


});