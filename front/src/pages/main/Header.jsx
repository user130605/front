import styled from "styled-components";
import BtnLogo from "../../components/BtnLogo";
import SearchBox from "../../components/SearchBox";
import AppRouter from "../../components/AppRouter";
import LogoImage from '../../assets/image/logo.png';

const Header = (props) => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={LogoImage} style={{ margin:'20px 20px', width: '175px', height: '79px' }} alt="logo"/>
            {/* 상단 네비게이션 */}
            <AppRouter resetSelectedInfo={props.resetSelectedInfo}/> 
        </header>
    );
}

export default Header;
