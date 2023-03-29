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
    min-width: 300px;
    display: flex;
    flex-direction: column;
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
`
const SidebarIcons = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 2rem 0;
`

const PlayList = styled.div`
    margin: 5px 10px;
    font-size: 1.5rem;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
`

export {SidebarContainer, SidebarIcons, PlayList}