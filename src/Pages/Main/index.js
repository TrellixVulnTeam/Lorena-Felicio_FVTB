import * as React from 'react'

import { Container, Button, ButtonText } from '../style'
import { Login } from './style'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function Home ({ navigation }) {
  return (
    <Container>
      <Container>
        <Image source={require('@assets/main_logo.png')} />
      </Container>
      <Login>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('Second')}
        >
          <Button>
            <ButtonText>Proxima</ButtonText>
          </Button>
        </TouchableOpacity>
      </Login>
    </Container>
  )
}

const styles = StyleSheet.create({
  containerButton: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 100
  }
})
