import styled from "@emotion/styled";
import Anime from "react-anime";
import {FullScreen} from "../../greatComponents/LayoutTemplate/FullScreen";

interface ISandBox {
children?: any
}
export const SandBox = ({children}:ISandBox) => {
return<SandBoxWrapper>
    <FullScreen withNavBar>
        <Anime easing="easeOutElastic"
               duration={1000}
               direction="normal"
               fontSize="100px"
               loop={true}
               delay={(el, index:any) => index*400}
               backgroundColor="#ffffff"
               translateX='13rem'
               scale={[.75, 1]}>
            <div className="blue">dwadawdaw</div>
            <div className="green">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
            <div className="red">dwadawdaw</div>
        </Anime>
    </FullScreen>

</SandBoxWrapper>
}

let SandBoxWrapper = styled.div`
width: 100vw;
background: coral;
`