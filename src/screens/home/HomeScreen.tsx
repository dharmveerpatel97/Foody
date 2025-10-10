import {  Text } from 'react-native'
import { Container, HomeSearch } from 'src/component'
import MainList from './MainList'
export default function HomeScreen() {
  return (
    <Container fullScreen={false}>
      <HomeSearch />
      <MainList />
    </Container>
  )
}