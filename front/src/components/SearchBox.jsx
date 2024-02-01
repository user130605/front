import styled from "styled-components";
import SearchImage from '../assets/image/search.png';
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    return (
        <Container>
            <Input placeholder="가게이름을 검색해주세요"/>
            <Btn><ImgSearch src={SearchImage} alt="search"/></Btn>
        </Container>
    );
}

const Container = styled.span`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 450px;
    height: 46px;
    margin: 0px 0px 3px 0;
    padding: 0px;
`;

const Btn = styled.button`
    background: none;
    border: none;
    margin: 0px 0 0 -5px;
    padding: 0px;
`;

const ImgSearch = styled.img`
    width: 50px;
    height: 50px;
`;

export default SearchBox;
