/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ativi1;

/**
 *
 * @author alunolab08
 */
public class Seguro {
    private float valor;
    private boolean vigencia; // válida ou não
    private Cliente propietario;
    private Cliente[] assegurado; // vetor de clientes do seguro

//    private Veiculo veiculo;
    

    public Seguro() {
    }

    public Seguro(float valor, boolean vigencia, Cliente propietario, Veiculo veiculo) {
        this.valor = valor;
        this.vigencia = vigencia;
        this.propietario = propietario;
//      this.veiculo = veiculo;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public boolean isVigencia() {
        return vigencia;
    }

    public void setVigencia(boolean vigencia) {
        this.vigencia = vigencia;
    }

    public Cliente getPropietario() {
        return propietario;
    }

    public void setProprietario(Cliente cliente) {
        this.propietario = cliente;
    }

//    public Veiculo getVeiculo() {
//        return veiculo;
//    }
//
//    public void setVeiculo(Veiculo veiculo) {
//        this.veiculo = veiculo;
//    }

    
    
    
}
