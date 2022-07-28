import { useState } from "react";

const ReasonsWhyOneReason = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="reasonWrap">
                <div>
                    <h3>
                        <span className="headlines_stroke">
                            0{props.id + 1}
                        </span>
                    </h3>
                    <h3
                        style={{
                            textDecoration: isHovering
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {props.title}
                    </h3>
                </div>
                <p>+</p>
            </div>
            <div
                className={`openCard`}
                style={{
                    display: isHovering ? "inline-block" : "none",
                }}
            >
                <h3>
                    #0{props.id + 1} 
                    {props.title}
                </h3>
                <p>{props.reason}</p>
            </div>
        </li>
    );
};

export default ReasonsWhyOneReason;
