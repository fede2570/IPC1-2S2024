package ambitos;

public class Ambitos {
    
    static int numeroglobal = 10;       //Variable global
    
    public static void suma() {
        int numero1 = 5;    //Variable local
        System.out.println(numeroglobal);
        int suma = numero1 + numeroglobal;
        System.out.println("La suma es: " + suma);
    }
    
    //Método principal
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println(numeroglobal);
        suma();
    }
    
}
