import styled from "@emotion/styled";
import Anime from 'react-anime'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setNavBarOpen} from "../../redux/layoutSlice";

interface IMenuButton {
    children?: any
}

export const MenuButton = ({children}: IMenuButton) => {
    let isOpenMenuButton = useAppSelector(state => state.layout.navmenu.isOpen)
    let dispatch = useAppDispatch()
    let toggleMenuButton = ()=>{
    dispatch(setNavBarOpen())
        console.log(isOpenMenuButton)
    }
    let MenuItem = isOpenMenuButton?<Anime>
            <Anime autoplay={true} rotate="5deg" translateY={"-100px"} duration={9000} >
                <div className='menuButtonLine menuButtonLine1'/>
            </Anime>
            <Anime autoplay={true} scale={"0"} duration={9000}>
                <div className='menuButtonLine menuButtonLine2'/>
            </Anime>
            <Anime autoplay={true} rotate="-5deg" duration={9000}>
                <div className='menuButtonLine menuButtonLine3'/>
            </Anime>
        </Anime>:
        <Anime>
            <Anime autoplay={true} translateY={"100px"}  rotate="0deg" duration={9000}>
                <div className='menuButtonLine menuButtonLine1'/>
            </Anime>
            <Anime autoplay={true} scale={"1"} duration={9000}>
                <div className='menuButtonLine menuButtonLine2'/>
            </Anime>
            <Anime rotate="0deg" duration={9000}>
                <div className='menuButtonLine menuButtonLine3'/>
            </Anime>
        </Anime>
    return <MenuButtonWrapper onClick={toggleMenuButton}>
        {MenuItem}
    </MenuButtonWrapper>
}

const MenuButtonWrapper = styled.button`
  position: absolute;
  left: 0;
  height: 10rem;
  width: 10rem;
  background: aqua;


  & .menuButtonLine {
    position: absolute;

    width: 100%;
    height: 0.5rem;
  }

  & .menuButtonLine1 {
    background: red;
  }

  & .menuButtonLine2 {
    background: green;
  }

  & .menuButtonLine3 {
    background: blue;
  }
`