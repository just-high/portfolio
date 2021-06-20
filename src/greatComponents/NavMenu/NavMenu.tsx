import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setNavBarOpen} from "../../redux/layoutSlice";

interface INavBar {
    children?: any
}

export const NavMenu = ({children}: INavBar) => {
    let NavMenuToggle = useAppSelector(state => state.layout.navmenu.isOpen)
    return <NavMenuWrapper>

    </NavMenuWrapper>
}
const NavMenuWrapper = styled.nav`
  position: absolute;
  background: beige;
  display: flex;
  width: 100vw;
  height: 100vh;`


interface ILinkItem {
    children?: any
    animation?: any
    ref?: any
    onClick?: any
    id?: string
    pressed?: boolean
}

const LinkItem = ({children, onClick, id, pressed}: ILinkItem) => {

    return <LinkWrapper id={id} className={".element"} onClick={onClick}>
        {children}
    </LinkWrapper>
}
const LinkWrapper = styled.div<ILinkItem>`
  margin: 0 1rem;`