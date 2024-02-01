import styled from "styled-components";
import StoreItem from "./StoreItem";
import dummydata from "../../assets/data/dummydata.json";
import MoreStoresBtnImgUrl from "../../assets/image/ic_more_stores.png"

const StoresByType = (props) => {
    const maxItems = 4; // 한 줄에 보여줄 아이템의 최대 갯수
    let count = 0; // 현재 렌더링된 아이템의 갯수

    return (
        <StoresByTypeContainer>
            <StoreByTypeTopContainer>
                <TypeTxt>{props.type}</TypeTxt>
                {
                    props.selectedInfoType === null &&
                    <MoreStoresBtn onClick={props.onMoreClick}><MoreStoresBtnImg src = {MoreStoresBtnImgUrl}/></MoreStoresBtn>
                }
                
            </StoreByTypeTopContainer>
            <StoreItemContainer>
                {dummydata.map((store, index) => {
                    if (props.selectedCityOrDistrict === null) {
                        if (props.selectedInfoType === null) {
                            if (store.info_type === props.type && count < maxItems) {
                                count++;
                                return <StoreItem key={store.reg_id} img="" name={store.nickname} rating={store.rating}/>
                            }
                        }
                        else {
                            if (store.info_type === props.type) {
                                return <StoreItem key={store.reg_id} img="" name={store.nickname} rating={store.rating}/>
                            }
                        }
                    } else {
                        if (store.addr.includes(props.selectedCityOrDistrict)) {
                            if (props.selectedInfoType === null) {
                                if (store.info_type === props.type && count < maxItems) {
                                    count++;
                                    return <StoreItem key={store.reg_id} img="" name={store.nickname} rating={store.rating}/>
                                }
                            }
                            else {
                                if (store.info_type === props.type) {
                                    return <StoreItem key={store.reg_id} img="" name={store.nickname} rating={store.rating}/>
                                }
                            }
                        }
                    }
                    
                    return null;
                })}
            </StoreItemContainer>
        </StoresByTypeContainer>
    );
}


const StoresByTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    // margin-bottom: 13px;
`;

const StoreByTypeTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StoreItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    flex-wrap: wrap;
`;

const TypeTxt = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 8px;
    margin-top: 13px;
`;

const MoreStoresBtn = styled.button`
    border: none;
    background: none;
    margin-right: 40px;
`;

const MoreStoresBtnImg = styled.img`
    width: 30px;
    height: 30px;
`;

export default StoresByType;
