import { loginURL } from '../../spotify_logic'
import { LoginButton, LoginContainer } from './styles'

export default function Login() {
  
  return (
    <LoginContainer>
        <img src="../../Logo.png" alt="Logo" />
        <LoginButton href={loginURL}>Login whith spotify</LoginButton>
    </LoginContainer>
  )
}
