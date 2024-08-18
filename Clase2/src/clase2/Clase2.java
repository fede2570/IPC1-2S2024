package clase2;

import java.util.Scanner;

/**
 *
 * @author federico
 */
public class Clase2 {
    
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Ingrese un número: ");
        //int numero = scan.nextInt();
        
        //System.out.println("El número es: " + numero);
        
        System.out.println("------------- Estructura IF -------------");
        
        int numero2 = 5;
        
        if (numero2 < 4) {
            System.out.println("Número 3 es menor 4");
        } else {
            System.out.println("Número 3 es mayor que 4");
        }
        
        System.out.println("------------ Estructura SWITCH ----------");
        
        /*
        switch (EXPRESION) {
            case 1: 
                INSTRUCCIONES
                break;
            case 2:
               INSTRUCCIONES
                break;
            default:
               INSTRUCCIONES
               break;
        }
        */
        
        int mes = 4;
        
        switch (mes) {
            case 1:
                System.out.println("Es enero");
                break;
            case 2:
                System.out.println("Es febrero");
                break;
            case 3:
                System.out.println("Es marzo");
                break;
            default:
                System.out.println("No conincide con ningun mes");
                break;
        }
        
        
        //sout + TABULADOR
        System.out.println("-------- CICLO WHILE ---------------");

        /*
        while(CONDICION) {
            INSTRUCCIONES
            INCREMENTAL
        }
        */
        int valor = 1;
        
        while (valor < 3) { //2 < 3
            System.out.println(valor);
            valor++;    //2 + 1 = 3
        }
        
        
        System.out.println("------ CICLO DO WHILE ---------");
        
        /*
        do {
            INSTRUCCIONES
            INCREMENTAL
        } while(CONDICION);
        */
        
        int valor2 = 1;
        
        do {
            System.out.println(valor2);
            valor2++; //3 + 1 = 4
        } while(valor2 < 4); //4 < 4
        
        
        System.out.println("------------ CICLO FOR --------------");
        /*
        INICIALIZADOR: declaracion o asignacion de variables
        
        for (INICIALIZADOR; CONDICION; INCREMENTAL) {
            INSTRUCCIONES
        }
        */            //4 < 4 //3+1=4
        for(int i = 1; i < 5; i++) {
            System.out.println(i);
        }
        
        
        System.out.println("---------- EJEMPLO ARREGLOS ---------------");
        //TIPO_VARIABLE IDENTIFICADOR [] = new TIPO_VARIABLE[TAMAÑO]
        int arreglo_numeros [] = new int[4]; //Arreglo de 4 posiciones
        
        //Acceder al valor de una posicion 
        //IDENTIFICADOR[POSICION]
        System.out.println(arreglo_numeros[0]);
        System.out.println(arreglo_numeros[1]);
        
        //Cambiar el valor de un arreglo por medio de una posición
        //IDENTIFICADOR[POSICION] = EXPRESION;
        arreglo_numeros[0] = 2;
        System.out.println(arreglo_numeros[0]);
        
        System.out.println("------ RECORRIDO DE ARREGLO -----------------");
        for (int i = 0; i < arreglo_numeros.length; i++) {
            System.out.println(arreglo_numeros[i]);
        }
        
        System.out.println("-------- MATRZ ---------------------");
        //TIPO [][]IDENTIFICADOR = new TIPO[FILAS][COLUMNAS];
        int [][]matriz = new int[2][2];
        
        //IDENTIFICADOR[FILAS][COLUMAS]
        System.out.println(matriz[0][0]);
        
        //IDENTIFICADOR[FILA][COLUMNA] = EXPRESION;
        matriz[0][0] = 5;
        System.out.println(matriz[0][0]);
        
        System.out.println("------- RECORRIDO DE MATRIZ -------------");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.println(matriz[i][j]);
            }
        }

                //ArrayList<TIPO> IDENTIFICADOR = new ArrayList<>();
        ArrayList<Integer> lista = new ArrayList<>();
        //Guardar valores en lista
        //IDENTIFICADOR.add(EXPRESION);
        lista.add(1);   //1 se guarda en posicion 0
        lista.add(2);   //2 se guarda en posicion 1
        lista.add(10);  //10 se guarda en posicion 2
        
        System.out.println("------- IMPRIMIR ARRAYLIST -------------");
        System.out.println(lista);
        
        System.out.println("--------- RECORRER ARRAYLIST -----------");
        //Recorrer ArrayList
        for (int i = 0; i < lista.size(); i++) {
            System.out.println(lista.get(i));
        }
        
        System.out.println("-------- RECORRER ARRAYLSIT CON FOREACH ------");
        /*
        for (TIPO ID: NOMBRE_LISTA) {
            System.out.println(ID);
        }
        */
        for (Integer i: lista) {
            System.out.println(i);
        }
        
        
        System.out.println("--------- ACCEDER A VALOR POR MEDIO DE POSICON ------");
        //Acceder a valor por medio de posicion
        //IDENTIFICADOR.get(POSCION);
        System.out.println(lista.get(0));
        //int valor = lista.get(0);
        
        System.out.println("--------- CAMBIAR VALOR DE POSICION ------");
        //Cambiar valor de posicion
        //IDENTIFICADOR.set(POSICION, EXPRESION);
        lista.set(0, 7);  //Cambia el valor 1 a 7 por medio de posicion 0
        System.out.println(lista.get(0));
        
        //Borrar valor en posicion
        //IDENTIFICADOR.remove(POSICION);
        //lista.remove(2);
        //System.out.println(lista.get(2)); //Muestra un error
        
    }
    
}
