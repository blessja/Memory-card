import PropTypes from 'prop-types'

const Header = ({ title}, props) => {

    return (
        <header>
            <h1>{title}</h1>
            <div className="row">
                <div className="container">{props.children}
                    <p className="lead">Get points by clicking on an image but don't click on any more than once!</p>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Memory Card',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header