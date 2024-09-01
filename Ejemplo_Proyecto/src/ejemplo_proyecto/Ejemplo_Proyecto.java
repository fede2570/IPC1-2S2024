package ejemplo_proyecto;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;

/**
 *
 * @author federico
 */
public class Ejemplo_Proyecto {
    
    //Arraylist<TIPO> IDENTIFICADOR = new ArrayList<>();
    public static ArrayList<Investigador> lista_investigador = new ArrayList<>();
    public static ArrayList<Muestras> lista_muestras = new ArrayList<>();

    public static void main(String[] args) {
        // TODO code application logic here
        lista_investigador = deserializar();
        Login login = new Login();
        login.setVisible(true);
    }
    
    public static void serializar() {
        try {
            FileOutputStream fileStream = new FileOutputStream("archivo.bin");
            ObjectOutputStream objectStream = new ObjectOutputStream(fileStream);
            objectStream.writeObject(lista_investigador);
            objectStream.close();
            fileStream.close();
        } catch (Exception e) {
            
        }
    }
    
    public static ArrayList<Investigador> deserializar() {
        
        ArrayList<Investigador> lista = new ArrayList<>();
        
        try {
            FileInputStream fileStream = new FileInputStream("archivo.bin");
            ObjectInputStream objectStream = new ObjectInputStream(fileStream);
            lista = (ArrayList<Investigador>) objectStream.readObject();
        } catch(Exception e) {
            
        }
        return lista;
    }
}
