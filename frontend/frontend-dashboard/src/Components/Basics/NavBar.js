import React from 'react'
import MovingText from 'react-moving-text'
const NavBar = ({ name }) => {
    return (
        <header className="bg-white shadow">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 ml2">
                    <MovingText
                        type="fadeIn"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        {name}
                    </MovingText>
                </h1>
            </div>
        </header>
    )

}
export default NavBar
