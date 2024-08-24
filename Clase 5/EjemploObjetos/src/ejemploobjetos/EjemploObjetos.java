package ejemploobjetos;

import java.util.ArrayList;

public class EjemploObjetos {
    
    public static ArrayList<Persona> lista_personas = new ArrayList<>();
    
    //Metodo main
    public static void main(String[] args) {
        // TODO code application logic here
        //NOMBRE_CLASE NOMBRE_OBJETO = new NOMBRE_CLASE();
        //Primer objeto
        Persona persona1 = new Persona("Persona1", "dskds", 30);
        
        //Para acceder a los atributos del objeto persona1
        //Se utiliza la siguiente expresion: NOMBREOBJETO.NOMBREATRIBUTO
        //En el ejemplo el nombre del objeto es persona1 y el atributo es nombre
        System.out.println(persona1.nombre);    //Salida: Persona1
        System.out.println(persona1.edad);      //Salida: 30
        
        //Un objeto puede contener comportamientos, siendo métodos o funciones
        /*Para utilizar un método a partir de un objeto se tiene que tener
          creado el método en la clase.
          En la clase Persona en el archivo Persona.java se encuentran dos
          métoodos, un método caminar y estudiar
          Para ejecutar dichos métodos de un objeto se debe de realizar una llamada
          de un método o función.
        */
        //Llamda de método en un objeto
        persona1.caminar();     //Ejecuta instrucciones de método caminar
        persona1.estudiar();    //Ejecuta instrucciones de método estudiar
        
        //Segundo objeto
        Persona persona2 = new Persona("Persona2", "dsjk", 25);
        
        //Lista dinamica para guardar objetos
        lista_personas.add(persona1);
        lista_personas.add(persona2);
        
        //Foreach para recorrer lista de objetos Personas
        //La variable persona es el objeto que se va a recorrer
        for (Persona persona: lista_personas) {
            System.out.println(persona.nombre);
        }
    }
    
}
