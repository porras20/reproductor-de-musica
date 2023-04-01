import styled from "styled-components";

const SidebarContainer = styled.div`
    flex: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 1rem;
    height: 100vh;
    background-color: #2E4F4F;
    color: #fff;
    padding-top: 1rem;
    img{
        width: 15rem;
        margin: 0 auto;
    }
    h4, svg, h2{
        cursor: pointer;
    }
    h4, h2{
        display: inline;
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 1rem;  
        transition: 0.2s ease;
    }
    h4:hover, h2:hover{
        color: #000;
    }

    @media screen and (max-width: 768px){
        flex-direction: row;
        height: 20vh;
        width: 100vw;
        position: absolute;
        padding: 0;
        bottom: 0;
        img, hr{
            display: none;
        }
    }
`
const SidebarIcons = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    @media screen and (max-width:768px){
        flex: 0.5;
        align-items: flex-start;
        justify-content: center;
        padding: 0;
    }
    @media screen and (max-width: 500px){
        display: none
    }
`

const PlayList = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;

    //Titulo
    h2{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: bold;
        color: #000;
    }
    /* Nombre de canciones */
    h3{
        color: #fff;
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        
        :hover{
            cursor: pointer;
            transition: 0.2s ease;
            color: #
        }
    }
    @media screen and (max-width: 768px){
       flex: 0.5;
       align-items: center;
       .name_playlist{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
       }
    }

    @media screen and (max-width: 500px){
        flex: 1;
        font-size: 0.8rem;
    }
`



export {SidebarContainer, SidebarIcons, PlayList}