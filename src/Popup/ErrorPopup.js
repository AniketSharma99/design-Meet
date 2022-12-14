import React from 'react'
// import PrimaryButton from '../../globalComponents/buttons/primaryButton/PrimaryButton'
import './error.css'

const ErrorPopup = ({isOpen}) => {

    const navigate =()=>{
            window.location.href="https://eclectic-buttercream-298f4c.netlify.app"
            console.log("click")
    }

    return (
        <div className={`popupOuter ${isOpen ? 'active' : ''}`}>
            <div className="confirmationPopupContainer">
                {/* <div className="popupHeader">
                    <p className="popupTitle">{"Error!!"}</p>
                    <img onClick={onClick} src="../resources/images/x-close.svg" alt="" />
                </div> */}
                <div className="popupBody">
                    <p className="popupText"> <b>{"Error occurred when trying to get an access to your Audio or Video devices"}</b>. Please get back to home page</p>
                    <div className="popupBtnGrp">
                        {/* <PrimaryButton classname={btnType} children={btnText}/>
                         */}

                         <button style={{zIndex:'10000000000000'}} type="btn" onClick={navigate} alt="btn" className='btn-blue'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPopup