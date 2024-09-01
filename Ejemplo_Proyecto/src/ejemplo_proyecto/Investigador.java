package ejemplo_proyecto;

import java.io.Serializable;

/**
 *
 * @author federico
 */
public class Investigador implements Serializable { //Interfaz Serializable
    
    String codigo, nombre, password;
    int cantidad;
    
    //Constructor de clase
    public Investigador(String codigo, String nombre, int cantidad, String password) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.password = password;
    }
    
}
