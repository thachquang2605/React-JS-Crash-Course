
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd   }) => {
   
    
    return (
        <header className='header'>
            <h1 > {title} </h1>
            <Button 
            color={showAdd ? 'red': 'green'}
             text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />

        </header>
    )
}
Header.defaultProps = {
    title: 'Tracker',
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