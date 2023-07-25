// 컴포넌트의 인자(props)는 object 형식
// (props.text) -> ({text}) 축약형 으로 사용가능

import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button ({text, onClick}) {
    return <button className={styled.btn} onClick={onClick}
    >{text}</button>
}

// 컴포넌트의 props 의 타입을 정의
Button.prototype = {
    text: PropTypes.string.isRequired,
}

export default Button;