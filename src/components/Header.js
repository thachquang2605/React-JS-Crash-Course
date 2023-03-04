
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1 > {title} </h1>
            <Button color='green' text='Add'
                onClick={onClick} />

        </header>
    )
}
Header.defaultProps = {
    title: 'Dang Nhap',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// Css in js
//const headingStyle = {
//  color: 'red',
//backgroundColor: 'black',
//}
export default Header