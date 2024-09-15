package clase8;

import controller.Controlador;
import model.Modelo;
import view.VentanaGenerar;

public class EjemploPractica {

    public static void main(String[] args) {
        Modelo modelo = new Modelo();
        VentanaGenerar ventana = new VentanaGenerar();
        Controlador controller = new Controlador(modelo, ventana);
        ventana.setVisible(true);
    }
    
}
