package ejemploobjetos;

public class Persona {
    //Atributos de la clase
    //Declaracion de variables
    String nombre;
    String apellido;
    int edad;
    
    //Constructor para inicializar los atributos
    public Persona(String nombre, String apellido, int edad) {
        //Inicializar los atributos
        //this se usa para acceder a atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    //Comportamientos de una clase
    //metodos o funciones
    public void caminar() {
        System.out.println("Caminar");
    }
    
    public void estudiar() {
        System.out.println("Estudiar");
    }
}
