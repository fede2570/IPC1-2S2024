package ejemploshilos;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class Figura extends JPanel implements Runnable {
    
    int x = 0;
    int y = 0;
    int dx = 1;
    int dy = 1;
    
    public Figura() {
        this.setSize(600, 400);
        Thread hilo = new Thread(this);
        hilo.start();
    }
    
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(Color.BLUE);
        g.fillOval(x, y, 50, 50);
    }
    
    @Override
    public void run() {
        
        while (true) {
            
            x += dx;
            //y += dy;
            
            System.out.println("Posicion x: " + x);
            System.out.println("Posicion y: " + y);
            repaint();      //Volver a pintar la figura
            
            try {
                Thread.sleep(20); //Aumentar la velocidad
            } catch (Exception e) {
                
            }
        }
        
    }
}
