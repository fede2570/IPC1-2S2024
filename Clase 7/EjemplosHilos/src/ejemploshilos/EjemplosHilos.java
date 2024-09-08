package ejemploshilos;

import javax.swing.JFrame;

public class EjemplosHilos {

    public static void main(String[] args) {
        // TODO code application logic here
        //Ejemplo de primer hilo
        /*
        Hilo hilo = new Hilo();
        hilo.start();
        */
        
        //Ejemplo de segundo hilo
        /*JFrame ventana = new JFrame();
        ventana.setSize(600, 400);
        Figura figura = new Figura();
        ventana.add(figura);
        ventana.setVisible(true);*/
        
        //Ejemplo de tercer hilo
        Ventana ventana = new Ventana();
        ventana.setVisible(true);
    }
}
