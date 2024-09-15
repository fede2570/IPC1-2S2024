package model;

import java.util.ArrayList;

public class Modelo {
    
    public static ArrayList<Producto> listaProductos;
    
    public Modelo() {
        this.listaProductos = new ArrayList<>();
    }
    
    public void guardarProducto(Producto producto) {
        this.listaProductos.add(producto);
    }
    
    public Producto obtenerProducto(String codigo) {
        for (Producto pro: this.listaProductos) {
            if (pro.getCodigo().equals(codigo)) {
                return pro;
            }
        }
        return null;
    }
    
}
