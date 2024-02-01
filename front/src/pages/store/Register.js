// Register.js

import React, { useState } from 'react';
import { Form, Button, Container, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';


function Register() {
  const [regName, setRegName] = useState('');
  const [regComment, setRegComment] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regAddr, setRegAddr] = useState('');
  const [regType, setRegType] = useState('');
  const [regImg, setRegImg] = useState(null);

  const handleReg = async () => {
    try {
      const formData = new FormData();
      formData.append('name', regName);
      formData.append('comment', regComment);
      formData.append('phone', regPhone);
      formData.append('addr', regAddr);
      formData.append('type', regType);
      formData.append('memberId', 1);
      formData.append('imgFile', regImg);

      console.log('전송 데이터 :', Object.fromEntries(formData));
      
      const response = await axios.post('http://localhost:8081/api/location/reg', formData, {
        withCredentials: false, // credentials 설정
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('등록 성공:', response.data);
    } catch (error) {
      console.error('에러 발생:', error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRegImg(file);
  };

  return (
    <Container>
      <h2>매장(업소) 등록하기</h2>
      <Form>
        <Form.Group className="mb-3" controlId="regName">
          <Form.Label>매장 이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="매장 이름을 입력하세요"
            name="regName"
            value={regName}
            onChange={(e) => setRegName(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regComment">
          <Form.Label>매장 코멘트</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            cols={40}
            placeholder="ex. 월 11:30 - 22:00
            14:50 - 17:00 브레이크타임
            21:00 라스트오더"
            name="regComment"
            value={regComment}
            onChange={(e) => setRegComment(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regPhone">
          <Form.Label>매장 전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="매장 전화번호를 입력하세요"
            name="regPhone"
            value={regPhone}
            onChange={(e) => setRegPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regAddr">
          <Form.Label>매장 주소</Form.Label>
          <Form.Control
            type="text"
            placeholder="매장 주소를 입력하세요"
            name="regAddr"
            value={regAddr}
            onChange={(e) => setRegAddr(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regType">
          <Form.Label>매장 타입</Form.Label>
          <Form.Control
            type="text"
            name="regType"
            placeholder="SIGHTS, CAFE, RESTAURANT, PLAYGROUND"
            value={regType}
            onChange={(e) => setRegType(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formRegistrationNumber">
          <Form.Label>사업자 등록 번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="사업자 등록 번호를 입력하세요"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formImage">
          <FormLabel>매장 이미지</FormLabel>
          <FormControl
            input type="file" onChange={handleImageChange} />
        </Form.Group>

         <Button type="button" onClick={handleReg}>
          등록하기
        </Button> 
        
      </Form>
    </Container>
  );
}

export default Register;