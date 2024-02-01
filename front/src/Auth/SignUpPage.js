import { useState } from "react";
import { signUp } from "./AuthAPI";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import '../Layout/SignUpPage.css';
import { Form, Button, Container, FormControl, FormLabel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

//회원가입 페이지 email, nickname, password, birth, gender, isCustomer
export default function SignUpPage() {
    const [values, setValues] = useState({
        email: "",
        nickname: "",
        password: "",
        birth: "",
        gender: "",
        isCustomer: ""
    });

    const handleChange = async (e) => {
        setValues({...values,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        signUp(values)
        .then((response) => {
            window.location.href = `/login`;
        }).catch((error) => {
            console.log(error);
        });
    }

    const onSignup = () => {
        if (window.confirm("가입 하시겠습니까??")) {
            alert("가입되었습니다.");
        } else {
    
            alert("취소합니다.");
        }
    };

    return (

        <Container>
         <h2>회원가입</h2>
            <div>
            <label>회원 유형</label>
    
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
                <Form.Group className="mb-3" controlId="nickname">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control
                        type="text"
                        id="nickname" 
                        placeholder="닉네임을 입력하세요"
                        name="nickname"
                        value={values.nickname}
                        onChange={handleChange}
                    />
                    </Form.Group>
                
                    <div>
                    <label>성별</label>
                    <Form>
                        {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="남성"
                            name="gender"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                    <Form.Check
                        inline
                        label="여성"
                        name="gender"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    
                    </div>
                ))}
                </Form>
                </div>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="text"
                        id="email" 
                        placeholder="이메일을 입력하세요"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        id="password" 
                        placeholder="비밀번호를 입력하세요"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>생년월일</Form.Label>
                    <Form.Control
                        type="date"
                        id="birth" 
                        placeholder="생년월일을 입력하세요"
                        name="birth"
                        value={values.birth}
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Button type="submit" onClick={handleSubmit}>
                        회원가입
                    </Button> 
        </Container>
  
    );
}