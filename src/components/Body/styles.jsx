import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #2C3333;
    padding: 2rem;
    overflow-y: overlay;
    height: 100vh;
    color: #fff;

    @media (max-width: 768px) {
       flex: 1;
       padding: 1rem;
       overflow-y: scroll;
    }
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
    flex-direction: column;
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
    @media screen and (max-width: 925px){
        p{
            display: none;
        }
    }

    @media screen and (max-width: 580px){
        img{
            display: none
        }
    }

`

const HeaderCenter = styled.div`
    flex: 0.4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 320px;

    @media screen and (max-width: 925px){
       justify-content: space-between;
    }

    @media screen and (max-width: 580px){
        flex: 0.5;
    }
    
`
const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 925px) {
        flex: 0.4;
        path{
            display: none;
        }
    }

    @media screen and (max-width: 580px){
        display: none;
    }

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
    }
    img{
        height: 4rem;
        width: 4rem;
        object-fit: contain;
    }

`

const SongInfo = styled.div`

`
const NewPlaylistContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 0;
    display: flex;

    @media screen and (max-width: 767px){
        bottom: 10rem;
    }
    @media screen and (max-width : 500px){
        bottom: 25rem;
    }
`
const OptionPlaylist = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #CBE4DE;
    width: 10rem;
    height: 11rem;
    border-radius: 1rem;
    color: #000;
    font-size: 1rem;
    padding: 0.5rem;

    p{
        margin-bottom: 0.5rem;
        transition: border-bottom 2s;
        cursor: pointer;
        font-weight: bold;
    }

    @media screen and (max-width: 500px){

    }
`
const Icon = styled.div`
    height: 4rem;
    width: 4rem;
    background-color: #2E4F4F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
    align-self: flex-end;
    position: relative;
    right: 3rem;
    top: 1rem;
`


export {BodyContainer , HeaderContainer, Left, Right, 
        Container, HeaderCenter, HeaderLeft, HeaderRight, 
        Info, InfoText, Songs, Icons, 
        SongRowContainer, SongInfo, NewPlaylistContainer, Icon, OptionPlaylist}