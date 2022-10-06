import styled from 'styled-components'

export const Styled = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    .login{
        width: 47%;
        display: flex;
        justify-content: space-evenly;
    }
    .link{
        color:#4071f4;
        text-decoration:inherit
    }
    .remember-forgot{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    .register-links {
        text-align: center;
    }
    .login__img {
        width: 35%;
        margin-right: 50px;
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