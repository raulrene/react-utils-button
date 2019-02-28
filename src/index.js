import React from 'react';
import PropTypes from 'prop-types';

class ReactUtilsButton extends React.Component {
    render() {
        const { value, onClick, disabled, className, active } = this.props;

        return (
            <button type="button"
                    className={`utils-button${className ? ` ${className}` : ''}${active ? ' utils-button--active' : ''}`}
                    // Only trigger onClick if component is not disabled
                    onClick={!disabled ? onClick : () => {}}
                    disabled={disabled ? 'disabled' : undefined}>

                <span className='utils-button-value'>{value}</span>
            </button>
        );
    }
}

ReactUtilsButton.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};

export default ReactUtilsButton;
