import styled from "@emotion/styled";
import {css} from "@emotion/react";

interface IFullScreen {
    children?: any
    withNavBar?: boolean
}

export const FullScreen = ({children, withNavBar}: IFullScreen) => {
    return <FullScreenWrapper>
        {children}
    </FullScreenWrapper>
}

interface IFullScreenWrapper {
}

const FullScreenWrapper = styled.section<IFullScreenWrapper>`
  height: 100vh;
  width: 100vw;
  background: aqua;
`