import styled from 'styled-components'

export const Styled = styled.div`
  border-bottom: 1px solid gray;
  height: 35px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  .icon {
    align-self: center;
    color: #777777;
  }
  .eye {
    width: 35px;
    align-self: center;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: white;
    &:active {
      outline: none;
      border: none;
    }
  }
  input {
    flex-grow: 1;
    outline: 0;
    border: 0;
    line-height: 40px;
    padding-left: 15px;
  }
`