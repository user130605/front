import styled from "styled-components";
import StoreItem from "./StoreItem";
import StoresByType from "./StoresByType";
import React, { useState } from 'react';

const StoresOverview = (props) => {
    const infoType = ["명소", "카페", "음식점", "놀거리"];

    const selectInfoType = (type) => {
        // onSelectRegion(area);
        props.setSelectedInfoType(type);
    }

    return (
        <Container>
            {
                (props.selectedCityOrDistrict !== null && 
                <CityOrDistrictTxt>{props.selectedCityOrDistrict}</CityOrDistrictTxt>)
            }       
            {    
                infoType.map((type) => {
                if (props.selectedInfoType === null || props.selectedInfoType === type) {
                    return (
                        <div key={type}>
                            <StoresByType type={type} onMoreClick={() => selectInfoType(type)} selectedInfoType={props.selectedInfoType} selectedCityOrDistrict={props.selectedCityOrDistrict}/>
                            {
                                infoType.indexOf(type) !== infoType.length - 1 && props.selectedInfoType === null &&
                                <Divider />
                            }
                        </div>
                    );
                } else {
                    return null;
                }
            })}

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    margin-right: 40px;
`;

const CityOrDistrictTxt = styled.div`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 8px;
    margin-top: 13px;
    margin-left: 20px;
`;

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #61677A; // 원하는 색상으로 변경
`;

export default StoresOverview;
