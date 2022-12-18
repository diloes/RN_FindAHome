import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from '../data/items'

interface Props {
  item: Item
  img?: string
  button?: boolean
}

const { width } = Dimensions.get('screen')

const ScreenContainer = ({ item }: Props) => {
  return (
    <View style={{...styles.container, backgroundColor: item.bgColor}}>
      <Image source={item.img} style={styles.img} resizeMode='contain' />
      <Text style={{...styles.text, color: item.textColor}}>{item.text}</Text>
      {
        item.btn && 
        <>
          <View style={styles.btn}>
            <Image source={require('../../assets/googleIcon.png')} />
          </View>
          <View style={styles.linea} /> 
          <Text style={{...styles.text, color: item.textColor2}}>Ingresar como invitado</Text>
        </>
      }
      {
        item.imgAnimals &&
        <>
          <View style={styles.imgAnimals}>
            <Image source={item.imgAnimals} style={{width}} />
          </View>
        </>
      }
    </View>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  img: {
    width: 90,
    height: 90,
    position: 'absolute',
    right: 30,
    top: 50
  },
  imgAnimals: {
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    alignSelf: 'center',
    marginVertical: 30
  },
  linea: {
    height: 1,
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20
  }
}) 