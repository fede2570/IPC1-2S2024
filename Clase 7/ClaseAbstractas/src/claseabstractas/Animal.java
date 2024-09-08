package claseabstractas;

public abstract class Animal {
    
    String nombre;
    
    public void comer() {
        System.out.println("Comer");
    }
    
    //Método abstracto
    public abstract void sonido();
}
