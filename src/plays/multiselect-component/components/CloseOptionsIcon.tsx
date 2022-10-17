import React from "react";

const CloseOptionsIcon = ({onClick}: { onClick: () => void }) => {
    return <img alt="close" className="icon-button"
                onClick={onClick}
                src="https://img.icons8.com/ios/20/000000/delete-sign--v1.png"/>
}

export default CloseOptionsIcon;