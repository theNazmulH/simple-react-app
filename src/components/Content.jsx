import React from 'react'

const Content = ({ buttonText, onButtonClick, onTextAreaChange, displayText }) => {
    return (
        <div className="content">
            <textarea onChange={onTextAreaChange} />

            <button onClick={onButtonClick}>{buttonText}</button>
            {displayText && <p className='text'>{displayText}</p>}
        </div>
    )
}

export default Content