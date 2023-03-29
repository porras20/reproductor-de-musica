import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #2C3333;
`


const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    background-color: #CBE4DE;
    color: #000;
    h1{
        font-weight: bold;
    }
`

const Left = styled.div`
    flex: 0.5;
`
const Right = styled.div`
    flex: 0.5;
    min-width: 75px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`
export {BodyContainer , HeaderContainer, Left, Right, Container}