//Importamos compontentes, template y bootstrap. Es posible gracias a system en el html
import {Component, Template, bootstrap} from 'angular2/angular2';

// Nombre de la etiqueta HTML
@Component({
  selector: 'my-app'
})
// Contenido HTML del componente
@Template({
  inline: '<h1>Hola {{ name }}!</h1>'
})
// Controlador del componente
class MyAppComponent {
  constructor() {
    this.name = 'Iván';
  }
}

//Funcion que carga el componente en la página 
bootstrap(MyAppComponent);