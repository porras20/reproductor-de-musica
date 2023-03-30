import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #2C3333;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    flex: 0.5;
    min-width: 75px;
    color: #fff;

    input{
        border: none;
        width: 100%;
    }
`
const Right = styled.div`
    display: flex;
    align-items: center;

    h4{
        margin-left: 0.5rem;
    }
`

const HeaderContainer = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: #CBE4DE;
    color: #000;
    h1{
        font-weight: bold;
    }
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    max-width: 300px;
    img{
        margin-right: 1rem;
        height: 100%;
        width: 4rem;
        object-fit: contain;
        border-radius: 1rem

    }

`

const HeaderCenter = styled.div`
    flex: 0.4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 320px;
    
`

const HeaderDiv = styled.div`
    height: 50px;
    width: 2px;
    background-color: #fff;
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;

`

export {BodyContainer , HeaderContainer, Left, 
        Right, Container, HeaderCenter, 
        HeaderLeft, HeaderRight, HeaderDiv}