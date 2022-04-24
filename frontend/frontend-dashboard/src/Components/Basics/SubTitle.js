import React from 'react'
import MovingText from 'react-moving-text'

const SubTitle = ({ title, children }) => {
    return (
        <div className='px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <h1 className='py-2 text-3xl font-bold text-gray-700 ml2'>
                <MovingText
                    type="fadeIn"
                    duration="2000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    {title}
                </MovingText></h1>
            {children}
        </div>
    )
}
export default SubTitle