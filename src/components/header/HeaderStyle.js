import styled from "styled-components";

export const MainContainer = styled.form`
display: grid;
position: fixed;
top: 0;
grid-template-columns: 10% 50% 7% 33%;
grid-template-rows: 1fr;
height: 8vh;
width: 100%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.19) 0px 0px 10px, rgba(0, 0, 0, 0.23) 0px 2px 3px;
a{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
}
button{
    height: 60%;
    width: 70%;
    cursor: pointer;
    background-color: #f8f9fa;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
    :hover{
        border: 1px solid #a4a4a4;
    }
}
#logo{
    height: 7vh;
    align-self: center;
    justify-self: end;
}
input{
    height: 70%;
    width: 90%;
    justify-self: end;
    align-self: center;
    border: 1px solid #d0d0d0;
    border-radius: 20px;
    padding: 0 1vw;
    font-size: 1em;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: 0;
    }
    :focus{
        outline: 0;
    }
}
`
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `