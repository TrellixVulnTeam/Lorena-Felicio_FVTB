import * as React from 'react'

import { Container, Text, Button, ButtonText } from '../style'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function Second ({ navigation }) {
  return (
    <Container>
      <Text>
        Segunda página
      </Text>      
    </Container>
  )
}

const styles = StyleSheet.create({
  containerButton: {
    width: '100%',
    paddingTop: 100
  }
})
