import styled from "@emotion/styled";

interface IMainComponents {
children?: any
}
export const MainComponents = ({children}:IMainComponents) => {
return<MainComponentsWrapper>
    {children}
</MainComponentsWrapper>
}

const MainComponentsWrapper = styled.div`
    background: antiquewhite;
  width: 100vw;
`