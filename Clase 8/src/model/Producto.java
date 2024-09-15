package model;

public class Producto {
    
    private String codigo;
    private String material;
    
    public Producto(String codigo, String material) {
        this.codigo = codigo;
        this.material = material;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
