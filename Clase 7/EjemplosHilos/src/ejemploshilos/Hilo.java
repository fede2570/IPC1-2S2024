package ejemploshilos;

public class Hilo extends Thread {
    
    private static int contador;
    
    public void run() {
        while (true) {
            System.out.println("Tiempo: " + contador);
            contador++;
            
            try {
                //Cantidad de milisegundos que va a dura el hilo
                //1 segundo = 1000 milisegundos
                Thread.sleep(1000);
            } catch (Exception e) {
            }
        }
    }
}
