/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejemplo_proyecto;

/**
 *
 * @author federico
 */
public class Muestras {
    
    //Crear atributos de muestra
    String codigo, descripcion, estado;
    int matriz[][];
    
    //Crear constructor para inicializar atributos
    public Muestras(String codigo, String desc, String estado, int matriz[][]) {
        //Inicializar atributos
        //this se usa para acceder a los atributos
        this.codigo = codigo;
        this.descripcion = desc;
        this.estado = estado;
        this.matriz = matriz;
    }
}
