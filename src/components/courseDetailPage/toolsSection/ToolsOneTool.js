import { useState } from "react";

const ToolsOneTool = ({ tool }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div
            className="toolWrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="tool">
                <img src={`/img/${tool}`} alt="SuperCode Tool" />
            </div>
            <div
                className={`openCard`}
                style={{
                    display: isHovering ? "inline-block" : "none",
                }}
            >
                <h5>Discord</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus magna aliquet tellus laoreet integer sapien.
                </p>
                <p>Tellus magna aliquet tellus laoreet integer sapien.</p>
            </div>
        </div>
    );
};

export default ToolsOneTool;
