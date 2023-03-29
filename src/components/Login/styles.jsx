import styled from "styled-components";

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #fff;
    &img{
        width: 100%;
    }
`

const LoginButton = styled.a`
    padding: 20px;
    background-color: #19376D;
    border-radius: 90px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
`

export {LoginButton, LoginContainer}