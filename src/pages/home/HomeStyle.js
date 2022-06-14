import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
#logo{
    height: 20vh;
}
button{
    cursor: pointer;
    background-color: #f8f9fa;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    :hover{
        border: 1px solid #a4a4a4;
    }
}
`
export const Search = styled.form`
display: flex;
height: 20vh;
width: 58%;
justify-content: space-between;
align-items: center;
input{
    height: 7vh;
    width: 50vw;
    border: 1px solid #d0d0d0;
    border-radius: 20px;
    padding: 0 1vw;
    font-size: 1.05em;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    :focus{
        outline: 0;
    }
}
button{
    height: 5vh;
    width: 11vh;
}
`
export const Suggestions = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr ;
width: 80%;
height: 40%;
button{
    padding: 0 5px;
    width: 30%;
    min-width: 14vh;
    height: 30%;
    justify-self: center;
    align-self: center;
    border-radius: 15px;
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