import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #2C3333;
    padding: 2rem;
    overflow-y: overlay;
    height: 100vh;
    color: #fff;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;

    input{
        border: none;
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        padding-left: 0.5rem;
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
    border-radius: 5px;
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
const Info = styled.div`
    display: flex;
    align-items: flex-start;
    img{
        width: 20vw;
        margin: 0 1rem;
        box-shadow: 0 0.1rem 4rem #000;
    }
`

const InfoText = styled.div`
    flex: 1;
    h1{
        font-weight: bold;
        margin-bottom: 1rem;
    }
`

const Songs = styled.div`
    margin: 2rem, 3rem;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem;
    width: 15rem;

    svg{
        color: #fff;
    }
`

const SongRowContainer = styled.div`
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    z-index: 90;
    transition: 0.1s ease-in-out;
    
    :hover{
        cursor: pointer;
        background-color: #000;
        opacity: 0.8;
    }
    img{
        height: 4rem;
        width: 4rem;
        object-fit: contain;
    }

`

const SongInfo = styled.div`

`
export {BodyContainer , HeaderContainer, Left, Right, 
        Container, HeaderCenter, HeaderLeft, HeaderRight, 
        HeaderDiv, Info, InfoText, Songs,
        Icons, SongRowContainer, SongInfo}