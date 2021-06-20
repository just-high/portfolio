import styled from "@emotion/styled";

interface IFunStuff {
children?: any
}
export const FunStuff = ({children}:IFunStuff) => {
return<FunStuffWrapper>
    {children}
    funstuff
</FunStuffWrapper>
}

const FunStuffWrapper = styled.div`
width: 100vw;
background: blueviolet;`