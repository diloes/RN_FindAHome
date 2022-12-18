import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  data: any
}

const Pagination = ({data}: Props) => {

  return (
    <View style={styles.container}>
      {
        data.map((item: any, i: number) => (
          <View key={item.id} style={styles.dot}>
            
          </View>
        ))
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'

  },
  dot: {
    backgroundColor: 'grey',
    width: 10,
    height: 10,
    borderRadius: 10,
    bottom: 40,
    marginHorizontal: 8
  }
})
