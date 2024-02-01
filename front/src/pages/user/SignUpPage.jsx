import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Layout/SignUpPage.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import BirthDatePicker from './BirthDatePicker';
// import ImageUploader from './ImageUploader';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    birthday: '',
    images: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      // 회원가입 로직 추가

      // 예시: 회원가입 성공 시 페이지 이동
      navigate('/');
    } catch (error) {
      console.error('회원가입 에러:', error);
    }
  };
  
  const onSignup = () => {
    if (window.confirm("가입 하시겠습니까??")) {
        alert("가입되었습니다.");
    } else {

        alert("취소합니다.");
    }
};
  

  return (
    <Container>
    <div>
      <h2>회원가입</h2>
      <form>
      {/* <ImageUploader /> */}
      
      <div>
          <label>회원 유형</label>
          {/* <div>
            <label>
              <input type="radio" value="customer" name="userType"/>
              고객
            </label>
            <label>
              <input type="radio" value="owner" name="userType"/>
              업주
            </label>
          </div> */}
          <Form>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="고객"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
          <Form.Check
            inline
            label="업주"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
        </div>

        <div>
          <label>닉네임</label>
          <input type="text" name="username" placeholder="닉네임을 입력하세요." value={formData.username} onChange={handleChange} />
        </div>
        {/* <div>
          <label>성별 :</label>
          <div>
            <label>
              <input type="radio" value="male" name="gender"/>
              남성
            </label>
            <label>
              <input type="radio" value="female" name="gender"/>
              여성
            </label>
          </div>
        </div> */}

      <div>
        <label>성별</label>
        <Form>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="남성"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
          <Form.Check
            inline
            label="여성"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
    </Form>
    </div>

        <div>
          <label>이메일</label>
          <input type="email" name="email" placeholder="이메일을 입력하세요." value={formData.email} onChange={handleChange} />
        </div>
        {/* <input class="box" id="domain-txt" type="text"/>
        <select class="box" id="domain-list">
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="nate.com">nate.com</option>
        <option value="kakao.com">kakao.com</option>
        </select> */}

        <div>
          <label>비밀번호</label>
          <input type="password" name="password" placeholder="비밀번호를 입력하세요." value={formData.password} onChange={handleChange} />
        </div>

        <div>
            <label>생년월일</label>
            <input type="date" name="birthday" placeholder="생년월일을 입력하세요." value={formData.birthday} onChange={handleChange} />
        </div>
        

        {/* <BirthDatePicker>
        <div class="info" id="info__birth">
        <select class="box" id="birth-year">
            <option disabled selected>년</option>
        </select>
        
        <select class="box" id="birth-month">
            <option disabled selected>월</option>
        </select>
        <select class="box" id="birth-day">
            <option disabled selected>일</option>
        </select>
        </div>
        </BirthDatePicker> */}

        <button type="button" onClick={onSignup}>
          회원가입
        </button>
      </form>
    </div>
    </Container>
  );
};

export default SignUpPage;
