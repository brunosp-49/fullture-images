import { MainContainer } from "./LoadingStyle";
import gif from "../../assets/img/loading.gif"

export const Loading = () =>{
    return(
        <MainContainer>
            <img src={gif} alt="loading" />
        </MainContainer>
    )
}