import React from 'react';
import { Alert, Button, StatusBar, StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';

export default class App extends React.Component {
  

  constructor(props) {

    super(props);
    this.state = {
      saldo: 0.00,
      estadoBtn: null,
      txtCredito: 0.00,
      txtDebito: 0.00,
    }
  }

  salvarDebito = () => {
      this.state.saldo = (this.state.saldo - parseFloat(this.state.txtDebito)).toFixed(2);
      return this.setState({estadoBtn: 0});
    }

    salvarCredito = () => {
      this.state.saldo = (this.state.saldo + parseFloat(this.state.txtCredito)).toFixed(2);
      return this.setState({estadoBtn: 0})
    }
  


  render() {
    return (
      <View style={styles.container}>
        {this.state.saldo == 0.00 &&(
          <Text style={styles.textSaldo}>Saldo: R${this.state.saldo}</Text>
        )}
        {this.state.saldo > 0.00 &&(
          <Text style={styles.textSaldo, styles.saldoPositivo}><Text style={styles.textSaldo1}>Saldo: </Text>{`R$` + this.state.saldo}</Text>
        )}
        {this.state.saldo < 0.00 &&(
          <Text style={styles.textSaldo, styles.saldoNegativo}><Text style={styles.textSaldo1}>Saldo: </Text>{`R$` + this.state.saldo}</Text>
        )}
        
        <View style={styles.separator, styles.btnCredito} />
        
        <Button title="Credito"
          onPress={a => this.setState({estadoBtn: 1})} />
          <View style={styles.separator} />
          <Button title="Debito"
          onPress={b => this.setState({estadoBtn: 2})}/>
          {this.state.estadoBtn == 2 &&(
            <View style={styles.containerNewAba}>
              <Text style={styles.opDebito}>Operação de Debito</Text>
              <TextInput
                    autoCorrect = {false}
                    placeholder = {"Digite o valor Debito"}
                    placeholderTextColor = 'black'
                    style = {styles.inputStyle}
                    keyboardType = 'numeric'
                    onChangeText={(txtDebito) => this.setState({txtDebito})}
                />
              <View style={styles.separator} />
                <Button style={styles.btnInput} title="Salvar" onPress={this.salvarDebito}/>
                <Button style={styles.btnInput} title="Cancelar" onPress={a => this.setState({estadoBtn: 0})} />
            </View>
        )}

          {this.state.estadoBtn == 1 &&(
            <View style={styles.containerNewAba}>
              <Text style={styles.opCredito}>Operação de Credito</Text>
              <TextInput
                    autoCorrect = {false}
                    placeholder = {"Digite o valor Credito"}
                    placeholderTextColor = 'black'
                    style = {styles.inputStyle}
                    keyboardType = 'numeric'
                    onChangeText={(txtCredito) => this.setState({txtCredito})}
                />
              <View style={styles.separator} />
                <Button style={styles.btnInput} title="Salvar" onPress={this.salvarCredito}/>
                <Button style={styles.btnInput} title="Cancelar" onPress={a => this.setState({estadoBtn: 0})} />
            </View>
        )}


        
      </View>
    );
  }

  
}



const styles = StyleSheet.create({
  containerNewAba:{
    flex: 1,
    paddingHorizontal: 40,
  },
  btnInput:{
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 100,
    paddingVertical: 20
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
  separator: {
    width: 10,
    marginBottom: 30,
  },
  btnCredito:{
    marginTop: 100
  },
  saldoNegativo:{
    marginTop: 50,
    marginLeft: 50,
    fontSize: 18,
    color: "red",
  },
  saldoPositivo:{
    marginTop: 50,
    marginLeft: 50,
    fontSize: 18,
    color: "green",
  },
  textSaldo:{
    marginTop: 50,
    marginLeft: 50,
    color: 'black', 
    fontSize: 18
  },
  textSaldo1:{
    color: 'black', 
  },
  container: {
    flex: 1,
    paddingHorizontal: 70,
  },
  opDebito:{
    textAlign: 'center',
    backgroundColor: "gray",
    marginTop: 100,
    marginBottom: 10
  },
  opCredito:{
    textAlign: 'center',
    backgroundColor: "gray",
    marginTop: 100,
    marginBottom: 10
  },

  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  
});