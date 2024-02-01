// src/pages/ModifyReview.js
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useDropzone } from "react-dropzone";
import { Select, MenuItem } from "@mui/material";

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

// 입력 데이터의 유효성 검사
const validationSchema = Yup.object({
  review: Yup.string().required("리뷰 내용을 입력하세요"),
  grade: Yup.string().required("평점을 입력하세요"),
});

const ModifyReview = () => {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation 훅을 사용하여 현재 경로(location) 정보를 가져옵니다.

  const [values, setValues] = useState({
    image: null,
    name: "",
    review: "",
    grade: "",
  });
  const [errors, setErrors] = useState({});

  // location state에서 리뷰 데이터 가져오기
  const reviewData = location.state && location.state.reviewData;

  // 현재 저장되어 있는(수정 전) 값 불러오기
  useEffect(() => {
    // location.state에서 reviewData를 가져옵니다.
    const reviewData = location.state?.reviewData;

    if (reviewData) {
      setValues({
        image: reviewData.image || null,
        name: reviewData.name || "",
        review: reviewData.review || "",
        grade: reviewData.grade || "",
      });
    }
  }, [location.state?.reviewData]); // 처음 로드될 때만

  const uploadImage = async (file) => {
    try {
      // 이미지를 formData에 저장
      const formData = new FormData();
      formData.append("image", file);

      // // 서버에 이미지 업로드 요청
      // const response = await axios.post(
      //   "https://jsonplaceholder.typicode.com/users",
      //   formData
      // );
      // // 서버에서 반환한 이미지 URL을 저장
      // const imageUrl = response.data.imageUrl;

      // // 업로드 성공 시 상태 업데이트와 화면에 이미지 출력
      // setValues({
      //   ...values,
      //   profileImage: imageUrl,
      // });

      // 업로드한 이미지를 화면에 표시
      const imageUrl = URL.createObjectURL(file);

      // 상태 업데이트와 화면에 이미지 출력
      setValues({
        ...values,
        image: imageUrl,
      });
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // 이미지를 업로드하고, 업로드 성공 시 state에 저장
      const file = acceptedFiles[0];
      uploadImage(file);
    },
  });

  // 입력 요소의 변경 이벤트가 발생했을 때 호출되는 함수
  const handleChange = (e) => {
    // name : 입력 필드의 이름, value : 입력 필드의 값 -> 값 추출
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setValues({
      ...values,
      [name]: value,
    });
  };

  // 폼을 제출할 때 실행되는 함수
  const handleSubmit = async (e) => {
    // 폼의 기본 제출 동작 방지
    e.preventDefault();

    // 입력된 값 유효성 검사 -> valid : 유효성 검사에 통과된 값들
    await validationSchema
      .validate(values, { abortEarly: false })
      .then(async (valid) => {
        //----------
        // 리뷰 수정을 위한 데이터 객체 생성
        const requestData = {
          name: values.name,
          review: values.review,
          grade: values.grade,
        };

        try {
          // // 서버에 수정된 리뷰 데이터 전송
          // const response = await axios.put(
          //   `https://api.example.com/reviews/${values.name}`, // 수정할 리뷰의 고유 식별자에 따라 엔드포인트 설정
          //   requestData
          // );
          // // 서버 응답이 성공적인 경우
          // if (response.status === 200) {
          //   // 성공 메시지 출력 및 페이지 이동
          //   window.alert("리뷰 수정이 완료되었습니다.");
          //   navigate("/O_WrittenReview");
          // } else {
          //   // 서버 응답이 성공적이지 않은 경우에 대한 처리
          //   console.error("서버 응답이 실패했습니다.");
          // }

          setValues({
            ...values,
            // profileImage: imageUrl,
          });
          window.alert("리뷰 수정이 완료되었습니다.");
          navigate("/O_WrittenReview"); // WrittenReview 페이지로 이동
        } catch (error) {
          console.error("정보 수정 실패:", error);
        }
      })
      .catch((err) => {
        console.log("err : ", err);
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
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
                  <Link to="/C_InterestPlace" style={{ ...navStyle.link }}>
                    관심 장소
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ ...navStyle.tableCell }}>
                  <Link to="/C_WrittenReview" style={{ ...navStyle.link }}>
                    내가 작성한 리뷰
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ ...navStyle.tableCell }}>
                  <Link to="/C_ModifyInformation" style={{ ...navStyle.link }}>
                    내 정보 수정
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>
      <Container component="main" style={{ padding: "5%", width: "80%" }}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            border: "2px solid #99D98C",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            mb={2}
            style={{ marginBottom: "20px" }}
          >
            리뷰 수정
          </Typography>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 파일 드랍 영역 생성 */}
            <div
              {...getRootProps()}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 3%",
              }}
            >
              {/* 파일 업로드 처리 */}
              <input {...getInputProps()} />

              {/* values.image에 값이 있는지 확인 ? true이면 저장되어 있는 사용자의 프로필과 업로드 버튼 : false이면 기본 프로필과 업로드 버튼 */}
              {values.image ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    src={values.image}
                    style={{
                      width: "300px",
                      height: "300px",
                      marginBottom: "10%",
                    }}
                    alt="기본 이미지"
                  />
                  <Button
                    variant="contained"
                    component="div"
                    style={{ marginBottom: "5%" }}
                  >
                    이미지 업로드
                  </Button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    src={process.env.PUBLIC_URL + "/no_image.png"}
                    style={{
                      width: "300px",
                      height: "300px",
                      marginBottom: "10%",
                    }}
                    alt="기본 이미지"
                  />
                  <Button
                    variant="contained"
                    component="div"
                    style={{
                      marginBottom: "5%",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid #000",
                    }}
                  >
                    이미지 업로드
                  </Button>
                </div>
              )}
            </div>

            <div>
              <h2>{values.name}</h2>

              <form
                noValidate // 기본 유효성 검사 비활성화
                onSubmit={handleSubmit}
                sx={{ marginLeft: "3%" }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      required
                      id="review"
                      label="리뷰 내용"
                      name="review"
                      value={values.review}
                      onChange={handleChange}
                      error={Boolean(errors.review)}
                      helperText={errors.review}
                      multiline
                      rows={6}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      style={{ width: "100%" }}
                      required
                      fullWidth
                      id="grade"
                      label="평점"
                      name="grade"
                      value={values.grade}
                      onChange={handleChange}
                      error={Boolean(errors.grade)}
                      helperText={errors.grade}
                    >
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="4.5">4.5</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="3.5">3.5</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="2.5">2.5</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="1.5">1.5</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="0.5">0.5</MenuItem>
                      <MenuItem value="0">0</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
                <Button
                  style={{ width: "80%" }}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                >
                  수정하기
                </Button>
              </form>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ModifyReview;
