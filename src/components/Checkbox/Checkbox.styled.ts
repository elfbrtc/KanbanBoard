import styled from "styled-components";

export const Styled = styled.div`
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
input{
    width:0px;
    height: 0px;
    display: none;
}

.checkbox-container {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 3px;
    border:2px solid #515151;
    align-items: center;
    display: flex;
    justify-content: center;
}
.label {
    margin-left:10px;
    font-size:0.8rem
}
.check-icon {
    font-size:12pt
}
`