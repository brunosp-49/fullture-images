import { useNavigate } from "react-router-dom";
import { MainContainer, Search, Suggestions } from "./HomeStyle";
import logo from "../../assets/img/logo.png"
import { useGlobal } from "../../assets/global/context/globalState";
import { useEffect } from "react";


const Home = () =>{
    const {states, setters} = useGlobal()
    const {input} = states
    const {setInput} = setters
    const navigate = useNavigate()

    useEffect(() => {
        setInput("")
    }, [])

    const onSearch = (e) =>{
        e.preventDefault()
        navigate(`/search/${input}`)
    }

    const onSearchButton = (value) =>{
        setInput(value)
        navigate(`/search/${value}`)
    }

    return(
        <MainContainer>
                <img src={logo} id="logo" alt="logo"/>
            <Search onSubmit={onSearch}>
                <input type="text" placeholder="Procurar imagens" required value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                <button>Buscar</button>
            </Search>
            <Suggestions>
                <button onClick={()=>onSearchButton("Tecnologia")}>Tecnologia</button>
                <button onClick={()=>onSearchButton("Esportes")}>Esportes</button>
                <button onClick={()=>onSearchButton("Música")}>Música</button>
                <button onClick={()=>onSearchButton("JavaScript")}>JavaScript</button>
                <button onClick={()=>onSearchButton("FullStack")}>FullStack</button>
                <button onClick={()=>onSearchButton("Fullture")}>Fullture</button>
            </Suggestions>
        </MainContainer>
    )
}

export default Home;