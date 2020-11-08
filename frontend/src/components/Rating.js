import React from 'react';
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
    let stars = [];

    [1,2,3,4,5].forEach(position => {
        stars.push(
            <span key={position}>
                <i  style={{color}}
                    className={setIcon(value, position)}></i>
            </span>
        )
    });

    return (
        <div className='rating'>
            {stars}
            <span>{text && text}</span>
        </div>
    )
}

const setIcon = (value, position) => {
    if (value < position && value > position - 1) {
        return 'fas fa-star-half-alt';
    } else if (value < position) {
        return 'far fa-star';
    } else {
        return 'fas fa-star';
    }
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
