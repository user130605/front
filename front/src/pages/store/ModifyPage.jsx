
// import React, { useState } from 'react';
// import { Form, Button, Container, FormControl, FormLabel } from 'react-bootstrap';
// import '../Layout/ModifyPage.css';

// const ModifyPage = () => {
//   const [formData, setFormData] = useState({
//     placeName: '',
//     businessType: '',
//     contactNumber: '',
//     address: '',
//     addressDesc: '',
//     sido: '',
//     sigungu: '',
//     dong: '',
//     registrationNumber: '',
//     description: '',
//     timeDescription: ''
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onModify = () => {
//     if (window.confirm("수정 하시겠습니까??")) {
//         alert("수정되었습니다.");
//     } else {

//         alert("취소합니다.");
//     }
// };

//   return (
//     <Container>
//       <h2>업소 수정하기</h2>
//       <Form>
//         <Form.Group className="mb-3" controlId="formImage">
//           <FormLabel>이미지 수정하기</FormLabel>
//           <FormControl
//             input type="file" />
//         </Form.Group>
        
//         <Form.Group className="mb-3" controlId="formPlaceName">
//           {/* <ImageUploader /> */}
//           <Form.Label>장소 이름</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="장소 이름을 입력하세요"
//             name="placeName"
//             value={formData.placeName}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBusinessType">
//           <Form.Label>업종</Form.Label>
//           <Form.Select
//             name="businessType"
//             value={formData.businessType}
//             onChange={handleChange}
//           >
//             <option value="">업종을 선택하세요</option>
//             <option value="restaurant">음식점</option>
//             <option value="cafe">카페</option>
//             <option value="attraction">명소</option>
//             {/* 필요한 업종을 추가하세요 */}
//           </Form.Select>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formContactNumber">
//           <Form.Label>연락처</Form.Label>
//           <Form.Control
//             type="tel"
//             placeholder="연락처를 입력하세요"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         {/* <Form.Group className="mb-3" controlId="formAddress">
//           <Form.Label>주소</Form.Label>    
//           <Form.Control
//             type="text"
//             placeholder="주소를 입력하세요"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </Form.Group> */}

//         {/* <Form.Group className="mb-3" controlId="formAddress">
//           <Form.Label>주소</Form.Label>
//           <Form.Select
//             name="addressType"
//             value={formData.addressType}
//             onChange={handleChange}
//           >
//             <option value="">시/도를 선택하세요</option>
//             <option value="서울">서울</option>
//             <option value="경기">경기</option>
//             {/* 필요한 업종을 추가하세요 
//           </Form.Select>
//         </Form.Group>*/}

//         <Form.Group className="mb-3" controlId="formAddress">
//           <Form.Label>주소</Form.Label>
//           </Form.Group>

//             {/* 시/도 */}
//             <Form.Group className="mb-3" controlId="formSido">
//               <Form.Label>시/도</Form.Label>
//               <Form.Select
//                 name="sido"
//                 value={formData.sido}
//                 onChange={handleChange}
//               >
//                 <option value="">시/도를 선택하세요</option>
//                 <option value="서울">서울</option>
//                 <option value="경기도">경기도</option>
//                 <option value="전라도">전라도</option>
//                 <option value="충청도">충청도</option>
//                 <option value="경상도">경상도</option>
//                 {/* 필요한 시/도 목록을 추가하세요 */}
//               </Form.Select>
//             </Form.Group>

//             {/* 시/군/구 */}
//             <Form.Group className="mb-3" controlId="formSigungu">
//               <Form.Label>시/군/구</Form.Label>
//               <Form.Select
//                 name="sigungu"
//                 value={formData.sigungu}
//                 onChange={handleChange}
//               >
//                 <option value="">시/군/구를 선택하세요</option>
//                 <option value="창원시">창원시</option>
//                 <option value="마산시">마산시</option>
//                 {/* 필요한 시/군/구 목록을 추가하세요 */}
//               </Form.Select>
//             </Form.Group>

//             {/* 동/읍/면 */}
//             <Form.Group className="mb-3" controlId="formDong">
//               <Form.Label>동/읍/면</Form.Label>
//               <Form.Select
//                 name="dong"
//                 value={formData.dong}
//                 onChange={handleChange}
//               >
//                 <option value="">읍/면/동을 선택하세요</option>
//                 <option value="합성동">합성동</option>
//                 <option value="팔용동">팔용동</option>
//                 {/* 필요한 읍/면/동 목록을 추가하세요 */}
//               </Form.Select>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formAddressDesc">
//           <Form.Label>상세 주소</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="상세 주소를 입력하세요"
//             name="addressDesc"
//             value={formData.addressDesc}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formRegistrationNumber">
//           <Form.Label>사업자 등록 번호</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="사업자 등록 번호를 입력하세요"
//             name="registrationNumber"
//             value={formData.registrationNumber}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formDescription">
//           <Form.Label>상세 설명</Form.Label>
//           <Form.Control
//             type="text"
//             as="textarea"
//             rows={3}
//             placeholder="ex. 월 11:30 - 22:00
//             14:50 - 17:00 브레이크타임
//             21:00 라스트오더"
//             name="timeDescription"
//             value={formData.timeDescription}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button type="button" onClick={onModify}>
//           수정하기
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default ModifyPage;