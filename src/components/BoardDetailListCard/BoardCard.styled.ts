import styled from 'styled-components'

export const Styled = styled.div`
width: 130px;
height: 130px;
background-color:white ;
border-radius: 16px;
margin-right: 25px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
cursor:pointer;
.icon{
    border-radius: 20px;
    background-color: #2dcee9;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
 }
 .text{
    font-size: 14px;
    margin: 8px;
    text-align: center;
 }
 .board__card{
   display: flex;
   align-items: center;
   flex-direction: column;
 }
`