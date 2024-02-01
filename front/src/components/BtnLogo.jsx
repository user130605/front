import styled from "styled-components";
import LogoImage from '../assets/image/logo.png';
import { useNavigate } from "react-router-dom";


const BtnLogo = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/');
    }

    return (
        <Btn onClick={goToMain}><Img src={LogoImage} alt="logo"/></Btn>
    );
}


const Btn = styled.button`
    border: none;
    background: none;
`;

const Img = styled.img`
    width: 175px;
    height: 79px;
`;



export default BtnLogo;