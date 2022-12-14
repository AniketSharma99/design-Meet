import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RoomLabel = ({ roomId }) => {
  const copyID = roomId
  return (
   <>
 { roomId &&  <div className="room_label">
    
      <div className="room_label_paragraph">
        <label>ID: {`${roomId}`}</label>
        <CopyToClipboard text={copyID}>
          <button>
            {/* <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1658396948/Mask_group_lyksch.svg" alt="cpy"/> */}
            < svg width="24px" height="24px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.34 17.27C56.2654 17.1214 56.1712 16.9835 56.06 16.86L42.13 2.94C41.8438 2.66648 41.4658 2.50958 41.07 2.5H20.92C19.6159 2.50264 18.3661 3.02185 17.444 3.94395C16.5218 4.86606 16.0026 6.11595 16 7.42V10.62H12.42C11.1159 10.6226 9.86606 11.1418 8.94395 12.064C8.02185 12.9861 7.50264 14.2359 7.5 15.54V56.54C7.50264 57.8441 8.02185 59.0939 8.94395 60.016C9.86606 60.9382 11.1159 61.4574 12.42 61.46H43.08C44.3772 61.4574 45.6211 60.9437 46.542 60.0302C47.463 59.1168 47.9868 57.8771 48 56.58V53.38H51.58C52.8841 53.3774 54.1339 52.8582 55.056 51.936C55.9782 51.0139 56.4974 49.7641 56.5 48.46V17.93C56.4993 17.7005 56.4445 17.4744 56.34 17.27V17.27ZM42.57 7.62L51.38 16.42H42.57V7.62ZM45 56.62C45 57.1292 44.7977 57.6176 44.4376 57.9776C44.0776 58.3377 43.5892 58.54 43.08 58.54H12.42C11.9108 58.54 11.4224 58.3377 11.0624 57.9776C10.7023 57.6176 10.5 57.1292 10.5 56.62V15.62C10.5 15.1108 10.7023 14.6224 11.0624 14.2624C11.4224 13.9023 11.9108 13.7 12.42 13.7H16V48.46C16.0026 49.7641 16.5218 51.0139 17.444 51.936C18.3661 52.8582 19.6159 53.3774 20.92 53.38H45V56.62Z" fill="white" />
            </svg>

          </button>
        </CopyToClipboard>
        </div>
    </div>}
    </>
  );
};

export default RoomLabel;

// https://eclectic-buttercream-298f4c.netlify.app/join-room?id=${roomId}
