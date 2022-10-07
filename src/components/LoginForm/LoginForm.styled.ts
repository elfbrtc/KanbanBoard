import styled from 'styled-components'

export const Styled = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    .login{
        width: 47%;
        display: flex;
        justify-content: space-evenly;
        background: #f5f5f5;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .link{
        color:#4071f4;
        text-decoration:inherit
    }
    .remember-forgot{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        width: 67%;
    }
    .register-links {
        text-align: center;
    }
    .login__img {
        width: 35%;
        margin-right: 50px;
        background: #f5f5f5;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .login__img h1{
        margin:0;
    }
    img{
        /* width:'50%';
        height:'100%';
        margin-right:'200px'; */
    }
`