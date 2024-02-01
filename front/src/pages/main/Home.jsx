import Header from "./Header";
import RegionNav from "../../components/RegionNavigation"
import StoreItem from "../main/StoreItem";
import StoresOverview from "./StoresOverview";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [selectedInfoType, setSelectedInfoType] = useState(null);
    const [selectedCityOrDistrict, setSelectedCityOrDistrict] = useState(null);

    return (
        <div>
            <ContentContainer>
                <RegionNav selectedCityOrDistrict={selectedCityOrDistrict} setSelectedCityOrDistrict={setSelectedCityOrDistrict}/>
                <StoresOverview type="카페" selectedCityOrDistrict={selectedCityOrDistrict} selectedInfoType={selectedInfoType} setSelectedInfoType={setSelectedInfoType}/>
            </ContentContainer>
        </div>
    );
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px #99D98C solid;
`;

export default Home;