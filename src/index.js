import React from 'react';
import PropTypes from 'prop-types';

class ReactUtilsButton extends React.Component {
    render() {
        const { value, onClick, disabled, className, active, loading } = this.props;
        const isDisabled = disabled || loading;
        let elemClass = `utils-button${className ? ` ${className}` : ''}`;
        if (active) {
            elemClass += `${active ? ' utils-button--active' : ''}`;
        }
        if (loading) {
            elemClass += `${loading ? ' utils-button--loading' : ''}`;
        }

        return (
            <button type="button" className={elemClass}
                    // Only trigger onClick if component is not disabled
                    onClick={!isDisabled ? onClick : () => {}}
                    disabled={isDisabled ? 'disabled' : undefined}>
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
    active: PropTypes.bool,
    loading: PropTypes.bool
};

export default ReactUtilsButton;
