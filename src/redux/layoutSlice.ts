import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";


let initialState = {
    navmenu:{links: [
        {link: "ReadMe", pressed: true},
        {link: "SandBox", pressed: false},
        {link: "FunStuff", pressed: false},],
    isOpen: false}
}
export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setNavBarOpen: (state) => {
            state.navmenu.isOpen=!state.navmenu.isOpen
        }
    }
})

export const {setNavBarOpen} = layoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const layoutNavBar = (state: RootState) => state.layout.navmenu

export default layoutSlice.reducer