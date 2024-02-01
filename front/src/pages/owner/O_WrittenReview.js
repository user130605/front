// src/pages/WrittenReview.js
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const listStyle = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHead: {
    backgroundColor: "#D1E8C4",
  },
  tableCell: {
    padding: "12px 16px",
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

const WrittenReview = () => {
  // 입력된 장소
  const [placeName, setPlaceName] = useState("");
  // 선택된 업종
  const [category, setCategory] = useState("");
  // 목록
  const [writtenReviews, setWrittenReviews] = useState([]);
  // 사용자 ID 상태
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  // 초기 데이터 가져오기
  useEffect(() => {
    // 현재 로그인된 사용자의 ID 가져오기 (이 부분은 로그인 상태에 따라 달라집니다.)
    const loggedInUserId = "현재_로그인된_사용자의_ID"; // 이 값을 로그인 상태에 따라 설정해주세요.

    // 사용자 ID 상태 업데이트
    setUserId(loggedInUserId);

    const fetchInitialData = async () => {
      try {
        // 테스트용 데이터 --------------------------------------------------------------------------------------------------------
        const testSearchResults = [
          { name: "스타벅스", review: "맛있어요", rating: 4.5 },
          { name: "홍콩반점", review: "친절해요", rating: 3.8 },
          { name: "남산타워", review: "좋아요", rating: 4.5 },
          { name: "롯데월드", review: "재밌어요", rating: 3.8 },
        ];

        setWrittenReviews(testSearchResults);
        // ---------------------------------------------------------------------------------------
        // // 서버에서 현재 사용자의 작성 리뷰 데이터 가져오기
        // const response = await axios.get(
        //   `https://jsonplaceholder.typicode.com/reviews?userId=${loggedInUserId}`
        // );

        // // 서버 응답 성공 여부 확인
        // if (!response.ok) {
        //   throw new Error("서버 응답이 실패했습니다.");
        // }

        // // 서버에서 받아온 데이터 처리
        // setWrittenReviews(response.data);
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
        { name: "스타벅스", review: "맛있어요", rating: 4.5 },
        { name: "홍콩반점", review: "친절해요", rating: 3.8 },
        { name: "남산타워", review: "좋아요", rating: 4.5 },
        { name: "롯데월드", review: "재밌어요", rating: 3.8 },
      ];

      let filteredResults = testSearchResults;

      // ---------------------------------------------------------------------------------------
      // // 서버로 전송할 데이터
      // const requestData = {
      //   placeName,
      //   category,
      // };

      // // Fetch API를 사용하여 서버에 데이터 전송
      // const response = await axios.post(
      //   "https://jsonplaceholder.typicode.com/places",
      //   requestData
      // );

      // // 응답이 성공적인지 확인
      // if (!response.ok) {
      //   throw new Error("서버 응답이 실패했습니다.");
      // }

      // // 서버에서 받아온 데이터 처리
      // const searchResults = response.data;

      // let filteredResults = searchResults;

      // 카테고리 필터링
      if (category) {
        filteredResults = filteredResults.filter(
          (place) => place.category === category
        );
      }

      // 장소 이름 필터링
      if (placeName) {
        filteredResults = filteredResults.filter(
          (place) => place.name.indexOf(placeName) !== -1
        );
      }

      setWrittenReviews(filteredResults);
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다:", error.message);
    }
  };

  const handleModify = (place) => {
    // 리뷰 데이터를 ModifyReview 페이지로 전달
    navigate("/O_ModifyReview", {
      state: {
        reviewData: place,
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
      <div style={{ padding: "2%", width: "80%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 0,
            marginLeft: "20%",
          }}
        >
          {/* 업종 */}
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
          {/* 장소이름 */}
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

        {/* 목록 제목 및 개수 */}
        <p style={{ width: "20%", textAlign: "left" }}>
          내가 작성한 리뷰 ({writtenReviews.length}개)
        </p>

        {/* 목록 테이블 */}
        <div style={{ paddingTop: "5px" }}>
          <table style={listStyle.table}>
            <thead style={{ ...listStyle.tableHead }}>
              <tr>
                <th style={{ ...listStyle.tableCell, width: "10%" }}>목록</th>
                <th style={{ ...listStyle.tableCell, width: "20%" }}>장소</th>
                <th style={{ ...listStyle.tableCell, width: "30%" }}>내용</th>
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
              {writtenReviews.map((place, index) => (
                <tr
                  key={place.id}
                  style={{
                    borderBottom:
                      index === writtenReviews.length
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
                    {place.review}
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
                      onClick={() => handleModify(place)}
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

export default WrittenReview;
