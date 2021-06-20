import React from 'react';
import {MainComponents} from "./fractalComponents/MainComponents/MainComponents";
import {FunStuff} from "./fractalComponents/FunStuff/FunStuff";
import {ReadMe} from "./fractalComponents/ReadMe/ReadMe";
import {SandBox} from "./fractalComponents/SandBox/SandBox";
import {NavMenu} from "./greatComponents/NavMenu/NavMenu";

import {Switch, Route,} from "react-router-dom";
import styled from "@emotion/styled";
import {MenuButton} from "./greatComponents/NavMenu/MenuButton";

function App() {
    return (
        <AppWrapper className="App">
            <NavMenu/>
            <MenuButton/>
            <MainComponents>
                <Switch>
                   <Route exact path='/readme' component={ReadMe}/>
                    <Route exact path='/sandbox' component={SandBox}/>
                    <Route exact path='/funstuff' component={FunStuff}/>
                </Switch>
            </MainComponents>
        </AppWrapper>
    );
}
const AppWrapper = styled.div`
background: darkslategrey`

export default App;
