package ejemplo1;

import java.util.Scanner;

/**
 *
 * @author federico
 */
public class Ejemplo1 {

    public static void main(String[] args) {
        System.out.println("------------ DECLARACION DE VARIABLES ----------------------");
        // TODO code application logic here
        //TIPO_VARIABLE IDENTIFICADOR = EXPRESION;
        //TIPO_VARIABLE IDENTIFICADOR;
        int numero = 10;
        //Instrucción imprimir
        System.out.println(numero);
        
        String cadena = "Hola Mundo";       //Variable para cadenas de texto
        System.out.println(cadena);
        
        double numero2 = 12.5;      //Variable para números decimales
        System.out.println(numero2);
        
        float numeroflotante = 15.2f;       //Variable para números flotantes
        System.out.println(numeroflotante);
        
        boolean verdadero = true;           //Variable booleana que almacena verdadero
        System.out.println(verdadero);
        
        boolean falso = false;              //Variable booleana que almacena falso
        System.out.println(falso);               //sout + TAB
        
        System.out.println("------------------ASIGNACION DE VARIABLES---------------");
        //ASIGNACION DE VARIABLES
        int numero3 = 50;
        //IDENTIFICADOR = EXPRESION;
        numero3 = 100;
        System.out.println(numero3);
        
        String curso = "LABORATORIO IPC";
        System.out.println(curso);
        curso = "IPC1";
        System.out.println(curso);
        
        System.out.println("------------- CONCATENACION DE VALORES --------------------");
        System.out.println("LABORATORIO " + "IPC1");
        
        System.out.println("---------------- OPERACIONES ARITMETICAS -----------------");
        //Multiplicación EXPRESION1 * EXPRESION2
        //Suma EXPRESION1 + EXPRESION2
        //Resta EXPRESION1 - EXPRESION2
        //División EXPRESION1 / EXPRESION2
        //Módulo es el residuo de la división EXPRESION1 % EXPRESION2
        
        int suma = 1 + 2;
        System.out.println("LA SUMA ES: " + suma);
        int resta = 3 - 1;
        System.out.println("LA RESTA ES: " + resta);
        int multiplicacion = 2 * 2;
        System.out.println("LA MULTIPLICACION ES: " + multiplicacion);
        int division = 6 / 2;
        System.out.println("LA DIVISION ES: " + division);
        int residuo = 7 % 2;        //Operacion para módulo
        System.out.println("EL RESIDUO ES: " + residuo);
        
        System.out.println("---------------- OPERADORES CONDICIONALES -------------------");
        boolean igualacion = 1 == 1;       //true
        System.out.println("1 == 1: " + igualacion);
        boolean mayorque = 2 > 1;          //true
        System.out.println("2 > 1: " + mayorque);   //true
        boolean menorque = 1 < 2;                   //true
        System.out.println("1 < 2: " + menorque);   
        boolean mayoroigual = 1 >= 2;               //false
        System.out.println("1 >= 2: " + mayoroigual);
        boolean menoroigual = 1 <= 1;               //true
        System.out.println("1 <= 1: " + menoroigual);
        boolean diferente = 1 != 2;                 //true
        System.out.println("1 != 2: " + diferente);
        
        System.out.println("---------------- OPERADORES LOGICOS -------------------");
        //OPERADOR AND EXPRESIONBOOLEANA1 && EXPRESIONBOOLEANA2
        //Devuelve true si ambas condiciones son verdaderas.
        boolean igualacion1 = 1 == 1;       //true
        boolean igualacion2 = 2 == 2;       //true
        boolean operadorAND = igualacion1 && igualacion2;       //true
        System.out.println("1 == 1 && 2 == 2: " + operadorAND);
        
        //OPERADOR OR EXPRESIONBOOLEANA1 || EXPRESIONBOOLEANA2
        //Devuelve true si al menos una de las condiciones es verdadera
        boolean operadorOR = 1 == 1 || 2 < 1;           //true
        System.out.println("1 == 1 || 2 < 1: " + operadorOR);
        
        //OPERADOR NOT !EXPRESIONBOOLEANA1
        //Invierte el valor de una condición.
        boolean operadorNOT = !true;        //Convierte true a false
        System.out.println("!true: " + operadorNOT);
        
        
        /*
        if (CONDICION) {
            INSTRUCCIONES
        } else {
            INSTRUCCIONES
        }
        */
        
        System.out.println(" ----------- ESTRUCTURA DE CONTROL IF ------------");
        
        int nota = 61;
        
        if (nota > 60) {        //true
            System.out.println("Aprobo el curso");
        } else {
            System.out.println("Reprobo el curso");
        }
        
        if (false) {
            System.out.println("Es verdadero");
        } else {
            System.out.println("Es falso");
        }
        
        System.out.println("--------------- ESTRUCTURA SWITCH ------------");
        /*
        switch (EXPRESION) {
            case 1:
                INSTRUCCIONES;
                break;
            case 2:
                INSTRUCCIONES;
                break;
            default:
                INSTRUCCIONES;
                break;
        }
        */
        
        int dia = 1;
        
        switch (dia) {
            case 1:
                System.out.println("Es lunes");
                break;
            case 2:
                System.out.println("Es martes");
                break;
            case 3:
                System.out.println("Es miercoles");
                break;
            case 4:
                System.out.println("Es jueves");
                break;
            case 5:
                System.out.println("Es Viernes");
                break;
            default:
                System.out.println("No coincide ningun dia");
                break;
        }
        
        
        String letra = "a";
        
        switch (letra) {
            case "a":
                System.out.println("Es la letra a");
                break;
            case "b":
                System.out.println("Es la letra b");
                break;
            default:
                System.out.println("No coincide con ninguna letra");
                break;
        }
        
        System.out.println("-------- Operadores Incrementales ------------------");
        
        int num1 = 10;
        System.out.println(num1);
        
        //IDENTIFICADOR++;
        num1++;                 //10 + 1 = 11
        System.out.println(num1);
        
        System.out.println("--------- Operadores Decrementales -------------");
        
        int num2 = 6;
        System.out.println(num2);
        
        //IDENTIFICADOR--;
        num2--;                 //6 - 1 = 5
        System.out.println(num2);
        
        System.out.println("----------- Ciclo While -----------------");
        
        /*
        while (CONDICION) {
            INSTRUCCIONES
        }
        */
        
        //Ejemplo de contador de 1 a 3
        
        int num3 = 1;
        
        while(num3 < 4) {   
            System.out.println(num3);
            num3++;         
        }
        
        System.out.println(" ----- Ciclo Do While ------------");
        
        /*
        do {
            INSTRUCCIONES
        } while (CONDICION);
        */
        
        //Contador de 1 al 3
        
        int num4 = 1;
        
        do {
            System.out.println(num4);
            num4++;     //3++ = 3+1=4
        } while (num4 < 4); //4 < 4
        
        System.out.println("------------- Scanner -------------------");
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Ingrese su nombre: ");
        String nombre = scan.nextLine();
        System.out.println("Su nombre es: " + nombre);
        
        System.out.print("Ingrese un número: ");
        int numero5 = scan.nextInt();
        System.out.println("El número es: " + numero5);
    }
}
