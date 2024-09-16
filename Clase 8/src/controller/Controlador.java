package controller;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.table.DefaultTableModel;
import model.Modelo;
import model.Producto;
import view.VentanaGenerar;
import view.VentanaHilos;

public class Controlador implements ActionListener {
    
    private Modelo modelo;
    private VentanaGenerar ventanagenerar;
    private VentanaHilos ventanahilo;
    private DefaultTableModel dtm = new DefaultTableModel();
    private String codigo = "";
    private int cantidad = 0;
    
    public Controlador(Modelo modelo, VentanaGenerar ventana) {
        this.modelo = modelo;
        this.ventanagenerar = ventana;
        this.ventanahilo = new VentanaHilos();
        this.ventanagenerar.btnProducir.addActionListener(this);
        
        //Agregando producto de ejemplo
        //La carga de productos se hace con el csv
        Producto producto = new Producto("P-01", "metal");
        this.modelo.guardarProducto(producto);
    }
    
    public void producir() {
        codigo = this.ventanagenerar.campoCodigo.getText();
        cantidad = Integer.parseInt(this.ventanagenerar.campoCantidad.getText());
        this.ventanahilo.setVisible(true);
        iniciarHilo();
    }
    
    public int tiempoMaterial(String material) {
        int tiempo = 0;
        
        switch (material) {
            case "metal": {
                tiempo = 5;
            }
        }
        return tiempo;
    }
    
    public void iniciarHilo() {
        Thread hilo = new Thread(() -> {
            
            int cantidadProductos = 1;
            
            for (int i = 0; i < cantidad; i++) {
                this.ventanahilo.lbProducto.setText("Producto: " + cantidadProductos);
                Producto prod = this.modelo.obtenerProducto(codigo);
                String material = prod.getMaterial();
                //Tiempo del material
                int tiempoMaterial = tiempoMaterial(material);
                
                this.ventanahilo.barraMaterial.setValue(0);
                this.ventanahilo.barraMaterial.setMaximum(100);
                
                for (int j = 0; j < tiempoMaterial; j++) {
                    double porcentaje = (double) j/tiempoMaterial*100;
                    this.ventanahilo.barraMaterial.setValue((int) porcentaje);
                    this.ventanahilo.lbporcentajeMaterial.setText(porcentaje + "%");
                    
                    try {
                        Thread.sleep(1000);
                    } catch (Exception e) {
                        
                    }
                }
                
                cantidadProductos++;
            }
            this.ventanahilo.barraMaterial.setValue(0);
            
        });
        hilo.start();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == this.ventanagenerar.btnProducir) {
            producir();
        }
    }
}
