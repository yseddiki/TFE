import MovingText from 'react-moving-text'

const Content = ({ children }) => {
    return (
        <div className='px-4 py-6 mx-auto text-lg text-justify max-w-7xl sm:px-6 lg:px-8 '>
            <MovingText
                type="fadeIn"
                duration="4000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                {children}
            </MovingText>
        </div>
    )
}
export default Content