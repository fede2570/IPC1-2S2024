package claseabstractas;

public class Gato extends Animal {
    
    //Anotacion que sobreescribe el metodo
    @Override
    public void sonido() {
        System.out.println("El gato maulla");
    }
}
