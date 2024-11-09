import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer({ scrollRef }) {
    const LinkButton = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const onClickHandler = () => {
            navigate(props.link);
            if (props.scrollRef?.current) {
                props.scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        const isActive = location.pathname === `/${props.link}` || (location.pathname === '/' && props.link === "");

        return (
            <>
                <button
                    onClick={onClickHandler}
                    style={{
                        color: isActive ? 'black' : 'grey',
                        fontWeight: isActive ? 'bold' : 'normal'
                    }}
                    className='link'
                >
                    {props.name}
                </button>
            </>
        );
    }
    const goUp = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div>
           
            <footer className='Footer'>Created by:Mansi sahu</footer>
           
        </div>
    )
}

export default Footer;
