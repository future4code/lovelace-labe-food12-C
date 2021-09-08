import React from "react"
import {Rectangle, LogoFutureEats, ScreenContainer} from "./styled"
import Logo from "../../Assets/logo-future-eats@2x.png"

const TelaInicialPage = () => {

    return (
        <ScreenContainer>
            
            <Rectangle>
            <LogoFutureEats src= {Logo} />
            </Rectangle>
            
        </ScreenContainer>
    )
}


export default TelaInicialPage