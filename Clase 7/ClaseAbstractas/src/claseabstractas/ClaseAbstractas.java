package claseabstractas;

public class ClaseAbstractas {

    //Metodo principal
    public static void main(String[] args) {
        
        Gato gato = new Gato();
        gato.comer();
        gato.sonido();
        
        Perro perro = new Perro();
        perro.comer();
        perro.sonido();
    }
}
