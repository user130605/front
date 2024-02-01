// src/pages/RegisteredPlace.js
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const listStyle = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    cursor: "pointer",
  },
  tableHead: {
    backgroundColor: "#D1E8C4",
  },
  tableCell: {
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    textAlign: "center",
  },
};

const navStyle = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },
  tableHead: {
    backgroundColor: "#D1E8C4",
  },
  tableCell: {
    paddingBottom: "10px",

    textAlign: "center",
  },

  link: {
    textDecoration: "none",
    color: "#000",
    display: "block",
    width: "100%",
    textAlign: "center",
    fontWeight: "normal",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#fff",
      fontWeight: "bold",
    },
  },
};

const RegisteredPlace = () => {
  // 입력된 장소
  const [placeName, setPlaceName] = useState("");
  // 선택된 업종
  const [category, setCategory] = useState("");
  // 목록
  const [registeredPlaces, setRegisteredPlaces] = useState([]);
  // 사용자 ID 상태
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  // 초기 데이터 가져오기
  useEffect(() => {
    const loggedInUserId = "현재_로그인된_사용자의_ID"; // 로그인 상태에 따라 변경

    setUserId(loggedInUserId);

    const fetchInitialData = async () => {
      try {
        // 테스트용 데이터 --------------------------------------------------------------------------------------------------------
        const testSearchResults = [
          { name: "스타벅스", category: "카페", rating: 4.5, comment: "영업시간 : 11:00 ~ 22:30", phone: "055-1234-5678", addr: "경상남도 진주시" },
          { name: "홍콩반점", category: "음식점", rating: 3.8, comment: "영업시간 : 11:00 ~ 22:30", phone: "055-9876-5432", addr: "경상남도 창원특별시" },
        ];

        setRegisteredPlaces(testSearchResults);
        // ---------------------------------------------------------------------------------------
        // // 서버에서 현재 사용자의 등록한 장소 데이터 가져오기
        // const response = await fetch(
        //   `https://jsonplaceholder.typicode.com/places?userId=${loggedInUserId}`
        // );

        // // 서버 응답 성공 여부 확인
        // if (!response.ok) {
        //   throw new Error("서버 응답이 실패했습니다.");
        // }

        // // 서버에서 받아온 데이터 처리
        // const initialData = await response.json();

        // // 초기 데이터를 목록에 업데이트
        // setRegisteredPlaces(initialData);
      } catch (error) {
        console.error("데이터 로딩 중 오류가 발생했습니다:", error.message);
      }
    };

    // 페이지가 처음 호출되었을 때 초기 데이터 로딩 실행
    fetchInitialData();
  }, []);

  const handleSearch = async () => {
    try {
      // 테스트용 데이터 --------------------------------------------------------------------------------------------------------
      const testSearchResults = [
        { name: "스타벅스", category: "카페", rating: 4.5, comment: "영업시간 : 11:00 ~ 22:30", phone: "055-1234-5678", addr: "경상남도 진주시" },
        { name: "홍콩반점", category: "음식점", rating: 3.8, comment: "영업시간 : 11:00 ~ 22:30", phone: "055-9876-5432", addr: "경상남도 창원특별시" },
      ];

      let filteredResults = testSearchResults;

      // ---------------------------------------------------------------------------------------
      // // 서버 엔드포인트 URL
      // const apiUrl = "https://jsonplaceholder.typicode.com/places";

      // // 서버로 전송할 데이터
      // const requestData = {
      //   placeName,
      //   category,
      // };

      // // Fetch API를 사용하여 서버에 데이터 전송
      // const response = await fetch(apiUrl, {
      //   method: "POST",
      //   headers: {
      //     //'Content-Type': 'application/json',
      //   },
      //   // 검색 결과 목록 전송
      //   body: JSON.stringify(requestData),
      // });

      // // 응답이 성공적인지 확인
      // if (!response.ok) {
      //   throw new Error("서버 응답이 실패했습니다.");
      // }

      // // 서버에서 받아온 데이터 처리
      // const searchResults = await response.json();

      // // 사용자가 입력한 장소 이름과 일치하는 항목 필터링
      // const filteredResults = searchResults.filter((place) => {
      //   return place.name.includes(placeName);
      // });
      // ---------------------------------------------------------------------------------------

      // 장소 이름 필터링
      if (placeName) {
        filteredResults = filteredResults.filter(
          (place) => place.name.indexOf(placeName) !== -1
        );
      }

      // 서버에서 받아온(처리된 데이터) 검색 결과 업데이트
      setRegisteredPlaces(filteredResults);
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다:", error.message);
    }
  };

  const handleModify = (placeId, placeName, category, rating, index, comment, phone, addr) => {
    navigate('/RegisterUpdate', {
      state: {
        placeId,
        placeName,
        category,
        rating,
        index,
        comment,
        phone,
        addr
      },
    });
  };

  return (
    <div style={{ display: "flex" }}>
      {/* 네비게이션 영역 */}
      <div style={{ width: "20%", padding: "2%", paddingTop: "5%" }}>
        {/* 네비게이션 바 */}
        <nav
          style={{
            backgroundColor: "#99D98C",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <table style={{ ...navStyle.table }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #fff" }}>
                <td style={{ paddingTop: "10px", ...navStyle.tableCell }}>
                  분류
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...navStyle.tableCell, paddingTop: "10px" }}>
                  <Link to="/O_RegisteredPlace" style={{ ...navStyle.link }}>
                    내가 등록한 장소
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ ...navStyle.tableCell }}>
                  <Link to="/O_InterestPlace" style={{ ...navStyle.link }}>
                    관심 장소
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ ...navStyle.tableCell }}>
                  <Link to="/O_WrittenReview" style={{ ...navStyle.link }}>
                    내가 작성한 리뷰
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ ...navStyle.tableCell }}>
                  <Link to="/O_ModifyInformation" style={{ ...navStyle.link }}>
                    내 정보 수정
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>
      <div style={{ padding: "5%", width: "80%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 0,
            marginLeft: "20%",
          }}
        >
          <p style={{ width: "10%", marginLeft: "20px" }}>업종 : </p>
          <select
            style={{
              textAlign: "center",
              border: "1px solid #333",
              width: "20%",
              marginRight: "20px",
              height: "30px",
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">전체</option>
            <option value="카페">카페</option>
            <option value="음식점">음식점</option>
            <option value="명소">명소</option>
            <option value="놀거리">놀거리</option>
          </select>
          <input
            type="text"
            id="place_name_search"
            placeholder="장소 이름을 입력하세요."
            style={{ width: "40%", height: "30px" }}
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
          <button
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "10px",
              backgroundColor: "#99D98C",
              border: "0",
            }}
            onClick={handleSearch}
          >
            {" "}
            <IoSearch size={20} />{" "}
          </button>
        </div>
        <p style={{ width: "20%", textAlign: "left" }}>
          내가 등록한 장소 ({registeredPlaces.length}개)
        </p>
        <div style={{ paddingTop: "5px" }}>
          <table style={listStyle.table}>
            <thead style={{ ...listStyle.tableHead }}>
              <tr>
                <th style={{ ...listStyle.tableCell, width: "10%" }}>목록</th>
                <th style={{ ...listStyle.tableCell, width: "20%" }}>장소</th>
                <th style={{ ...listStyle.tableCell, width: "30%" }}>업종</th>
                <th style={{ ...listStyle.tableCell, width: "20%" }}>평점</th>
                <th
                  style={{
                    ...listStyle.tableCell,
                    width: "20%",
                    backgroundColor: "#fff",
                    borderBottom: "none",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {registeredPlaces.map((place, index) => (
                <tr
                  key={place.id}
                  style={{
                    borderBottom:
                      index === registeredPlaces.length - 1
                        ? "1px solid #D5E8CE"
                        : "none",
                  }}
                >
                  <td style={{ ...listStyle.tableCell, width: "10%" }}>
                    {index + 1}
                  </td>
                  <td style={{ ...listStyle.tableCell, width: "20%" }}>
                    {place.name}
                  </td>
                  <td style={{ ...listStyle.tableCell, width: "30%" }}>
                    {place.category}
                  </td>
                  <td style={{ ...listStyle.tableCell, width: "20%" }}>
                    {place.rating}
                  </td>
                  <td style={{ ...listStyle.tableCell, width: "20%" }}>
                    <button
                      style={{
                        backgroundColor: "#D1E8C4",
                        border: "0",
                        cursor: "pointer",
                        padding: "10px",
                        fontSize: "16px",
                        borderBottom: "none",
                      }}
                      onClick={() => handleModify(place.id, place.name, place.category, place.rating, index, place.comment, place.phone, place.addr)}
                    >
                      수정하기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredPlace;