import styled from "@emotion/styled";
import {FullScreen} from "../../greatComponents/LayoutTemplate/FullScreen";


interface IReadMe {
    children?: any
}

export const ReadMe = ({children}: IReadMe) => {
    return <ReadMeWrapper>
        <FullScreen>

        </FullScreen>
        <FullScreen>
            {children}
        </FullScreen>

    </ReadMeWrapper>
}

const ReadMeWrapper = styled.div`
  width: 100vw;
  background: aqua;

`