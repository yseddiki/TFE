import React from 'react'
import MovingText from 'react-moving-text'

 const Title = ({title, children}) => {
    return (
        <div className='py-2 mx-auto max-w-7xl sm:px-6 lg:px-2'>
            <h1 className='text-3xl font-bold text-center text-orange-300  ml2'>
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
export default Title
