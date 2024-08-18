package clase2_parte2;

/**
 *
 * @author PcNitro
 */
public class Clase2_Parte2 {
    
    //Método sin parametros
    public static void suma() {
        System.out.println("--------- Método suma() ----------");
        int numero1 = 2;
        int numero2 = 3;
        System.out.println(numero1 + numero2);
    }
    
    //Método con parámetros
    /*
    //Si hay más de un parametro se separa con comas
    public static void IDENTIFICADOR(TIPO NOMBRE) {
        INSTRUCCIONES
    }
    */  
    public static void resta(int numero1, int numero2) {
        int resta = numero1 - numero2;
        System.out.println("La resta es: " + resta);
    }
    
    /*
    Función sin parametros
    public static TIPO IDENTIFICADOR() {
        INSTRUCCIONES
        return EXPRESION;
    }
    */
    public static int funcionsuma() {
        int suma = 1 + 2;
        return suma;
    }
    
    //Función con parametros
    public static int division(int num1, int num2) {
        int division = num1 / num2;
        //System.out.println("");
        return division;
    }
    
    
    //Método principal
    public static void main(String[] args) {
        // TODO code application logic here
        //LLAMADA DE MÉTODO
        //IDENTIFICADOR();
        System.out.println("----- Llamada de método sin parametros ----");
        suma();
        //LLAMDA DE MÉTODO CON PARAMETROS
        //IDENTIFICADOR(EXPRESION, EXPRESION);
        System.out.println("----- Llamada de método con parametros ----");
        resta(2, 1);
        resta(200, 50);
        System.out.println("----- Llamada de función sin parametros ----");
        int suma = funcionsuma();
        System.out.println("Función suma: " + suma);
        System.out.println("----- Llamada de función con parametros ----");
        int division = division(9, 3);
        System.out.println(division);
    }
    
}
