import { Header } from "../../components/header/Header";
import { MainContainer, Results } from "./SearchStyle";
import { Loading } from "../../components/loading/Loading";
import { useGlobal } from "../../assets/global/context/globalState";
import { useEffect, useState } from "react";
import { getImages } from "../../assets/api/req";

const Search = () => {
  const {states, setters} = useGlobal()
  const {images} = states
  const {setImages} = setters
  const {input} = states
  const {setInput} = setters

    useEffect(()=>{
        getImages(setImages, input)
    },[])

  return (
    <MainContainer>
      <Header />
      <Results>{!images ? <Loading /> : <>
        {images.map((image)=>{
            return <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} key={image.id} className="resultsImg"/>
        })}
      </>}</Results>
    </MainContainer>
  );
};

export default Search;
