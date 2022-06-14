import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Results = styled.div`
display: grid;
margin-top: 12vh;
width: 90%;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
.resultsImg{
    max-height: 80%;
    justify-self: center;
    align-self: center;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 4px 20px, rgba(0, 0, 0, 0.23) 0px 8px 12px;
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