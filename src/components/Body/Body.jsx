import BodyIndex from './BodyIndex'
import Header from './BodyHeader'
import { BodyContainer } from './styles'

export default function Body() {
  return (
    <BodyContainer>
        <Header />
        <BodyIndex/>
    </BodyContainer>
  )
}
