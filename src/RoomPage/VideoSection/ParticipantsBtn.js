import React, { useState } from 'react'
import { connect } from "react-redux";
import store from '../../store/store';
import { setShowParticipants } from '../../store/actions';


const ParticipantsBtn = ({ showParticipants }) => {
    const [visible, setVisible] = useState(false);

    const handleOnClick = () => {
        setVisible(!showParticipants)
        store.dispatch(setShowParticipants(!visible))

        console.log("onnnnoffff", visible);
        console.log("shhfhfbe", showParticipants)
    }
    return (
        <div className='video_button_container' onClick={handleOnClick}>
            {/* <svg classname="video_button_image"  width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4265_6473)">
                    <path d="M6.349 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348
 2 12V15H0V12C0 11.2044 0.31607 10.4413 0.87868 9.87868C1.44129 9.31607 2.20435 9 3
  9H7.537C7.01384 9.58243 6.61019 10.262 6.349 11ZM21 9H16.463C16.9862 9.58243 17.3898 10.262 
  17.651 11H21C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12V15H24V12C24
   11.2044 23.6839 10.4413 23.1213 9.87868C22.5587 9.31607 21.7956 9 21 9ZM16 13C16 12.2089 15.7654 
   11.4355 15.3259 10.7777C14.8864 10.1199 14.2616 9.60723 13.5307 9.30448C12.7998 9.00173 11.9956 8.92252 
   11.2196 9.07686C10.4437 9.2312 9.73098 9.61217 9.17157 10.1716C8.61216 10.731 8.2312 11.4437 8.07686
    12.2196C7.92252 12.9956 8.00173 13.7998 8.30448 14.5307C8.60723 15.2616 9.11992 15.8864 9.77772 
    16.3259C10.4355 16.7654 11.2089 17 12 17C13.0609 17 14.0783 16.5786 14.8284 15.8284C15.5786 
    15.0783 16 14.0609 16 13ZM14 13C14 13.3956 13.8827 13.7822 13.6629 14.1111C13.4432 14.44 13.1308 
    14.6964 12.7654 14.8478C12.3999 14.9991 11.9978 15.0387 11.6098 14.9616C11.2219 14.8844 10.8655 
    14.6939 10.5858 14.4142C10.3061 14.1345 10.1156 13.7781 10.0384 13.3902C9.96126 13.0022 10.0009 
    12.6001 10.1522 12.2346C10.3036 11.8692 10.56 11.5568 10.8889 11.3371C11.2178 11.1173 11.6044 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13ZM18 21C18 20.2044 17.6839 19.4413 17.1213 18.8787C16.5587 18.3161 15.7956 18 15 18H9C8.20435 18 7.44129 18.3161 6.87868
     18.8787C6.31607 19.4413 6 20.2044 6 21V24H8V21C8 20.7348 8.10536 20.4804 8.29289 20.2929C8.48043 
     20.1054 8.73478 20 9 20H15C15.2652 20 15.5196 20.1054 15.7071 20.2929C15.8946 20.4804 16 20.7348 
    
    16 21V24H18V21ZM22 4C22 3.20888 21.7654 2.43552 21.3259 1.77772C20.8864 1.11992 20.2616 0.607234
     19.5307 0.304484C18.7998 0.00173312 17.9956 -0.0774802 17.2196 0.0768607C16.4437 0.231202 15.731 
     0.612165 15.1716 1.17157C14.6122 1.73098 14.2312 2.44372 14.0769 3.21964C13.9225 3.99557 14.0017 
     4.79983 14.3045 5.53074C14.6072 6.26164 15.1199 6.88636 15.7777 7.32588C16.4355 7.76541 17.2089 8
      18 8C19.0609 8 20.0783 7.57858 20.8284 6.82843C21.5786 6.07828 22 5.06087 22 4ZM20 4C20 4.39557 
      19.8827 4.78224 19.6629 5.11114C19.4432 5.44004 19.1308 5.69639 18.7654 5.84776C18.3999 5.99914 
      17.9978 6.03874 17.6098 5.96157C17.2219 5.8844 16.8655 5.69392 16.5858 5.41422C16.3061 5.13451
      16.1156 4.77815 16.0384 4.39018C15.9613 4.00222 16.0009 3.60009 16.1522 3.23464C16.3036 2.86918
       16.56 2.55683 16.8889 2.33706C17.2178 2.1173 17.6044 2 18 2C18.5304 2 19.0391 2.21072 19.4142 
       2.58579C19.7893 2.96086 20 3.46957 20 4ZM10 4C10 3.20888 9.7654 2.43552 9.32588 1.77772C8.88635 
       1.11992 8.26164 0.607234 7.53073 0.304484C6.79983 0.00173312 5.99556 -0.0774802 5.21964
        0.0768607C4.44371 0.231202 3.73098 0.612165 3.17157 1.17157C2.61216 1.73098 2.2312 2.44372 
        2.07686 3.21964C1.92252 3.99557 2.00173 4.79983 2.30448 5.53074C2.60723 6.26164 3.11992 6.88636
         3.77772 7.32588C4.43552 7.76541 5.20887 8 6 8C7.06087 8 8.07828 7.57858 8.82843 6.82843C9.57857
          6.07828 10 5.06087 10 4ZM8 4C8 4.39557 7.8827 4.78224 7.66294 5.11114C7.44318 5.44004 7.13082
           5.69639 6.76537 5.84776C6.39991 5.99914 5.99778 6.03874 5.60982 5.96157C5.22186 5.8844 4.86549
            5.69392 4.58579 5.41422C4.30608 5.13451 4.1156 4.77815 4.03843 4.39018C3.96126 4.00222 4.00087 
            3.60009 4.15224 3.23464C4.30362 2.86918 4.55996 2.55683 4.88886 2.33706C5.21776 2.1173 5.60444 
            2 6 2C6.53043 2 7.03914 2.21072 7.41421 2.58579C7.78929 2.96086 8 3.46957 8 4Z" fill="white">
                    </path></g><defs><clipPath id="clip0_4265_6473"><rect width="24" height="24" fill="white">
                    </rect></clipPath></defs></svg> */}
            <svg className={`video_button_image${showParticipants?"-active":""}`} width="22px" height="14px" viewBox="0 0 22 14" version="1.1" xmlns="http://www.w3.org/2000/svg" throwIfNamespace={false}>

                <title>Participants</title>
                <desc>Created with Sketch.</desc>
                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Rounded" transform="translate(-611.000000, -4103.000000)">
                        <g id="Social" transform="translate(100.000000, 4044.000000)">
                            <g id="-Round-/-Social-/-group" transform="translate(510.000000, 54.000000)">
                                <g>
                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path d="M16,11 C17.66,11 18.99,9.66 18.99,8 C18.99,6.34 17.66,5 16,5 C14.34,5 13,6.34 13,8 C13,9.66 14.34,11 16,11 Z M8,11 C9.66,11 10.99,9.66 10.99,8 C10.99,6.34 9.66,5 8,5 C6.34,5 5,6.34 5,8 C5,9.66 6.34,11 8,11 Z M8,13 C5.67,13 1,14.17 1,16.5 L1,18 C1,18.55 1.45,19 2,19 L14,19 C14.55,19 15,18.55 15,18 L15,16.5 C15,14.17 10.33,13 8,13 Z M16,13 C15.71,13 15.38,13.02 15.03,13.05 C15.05,13.06 15.06,13.08 15.07,13.09 C16.21,13.92 17,15.03 17,16.5 L17,18 C17,18.35 16.93,18.69 16.82,19 L22,19 C22.55,19 23,18.55 23,18 L23,16.5 C23,14.17 18.33,13 16,13 Z" id="🔹-Icon-Color" fill="#FFF"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        </div>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStoreStateToProps)(ParticipantsBtn)
