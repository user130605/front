import React, { useState,useEffect,useRef } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
function PopupWithInput({ onReviewAdded }) {

const [data, setData] = useState([]);
const [isLoading, setIsLoading] =  useState(false);
const [rating, setRating] = useState(0);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [inputValue, setInputValue] = useState('');

const emailRef = useRef(null);
const detailRef = useRef(null);

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-left: auto;
`;
const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


useEffect(() => {
    fetch("http://localhost:3001/detailpage")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
  
    if (!isLoading) {
      setIsLoading(true);
  
      try {
        const updatedData = { ...data }; // 데이터 복사
  
        // 새 리뷰 데이터 생성
        const newReview = {
          id: updatedData[0].review.length + 1,
          email: 'abc@abcd',
          detail: detailRef.current.value,
          grade: rating,
        }; 
  
        // 리뷰를 데이터에 추가
        updatedData[0].review.push(newReview);
  
        // 이미지를 선택한 경우에만 처리
        if (selectedFile) {
          // 이미지를 Base64로 변환
          const imageBase64 = await convertImageToBase64(selectedFile);
  
          // 이미지 데이터를 JSON에 추가
          newReview.image = imageBase64;
        }
  
        // 서버에 JSON 데이터 전송
        const response = await fetch(`http://localhost:3001/detailpage/${updatedData[0].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData[0]),
        });
  
        if (response.ok) {
          alert('작성이 완료 되었습니다');
          setIsLoading(false);
          closeModal();
          onReviewAdded(); // 부모 컴포넌트에 리뷰 추가 완료를 알림
        } else {
          const errorMessage = await response.text();
          alert(`작성을 실패하였습니다: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    }
  }
  
  // 이미지를 Base64로 변환하는 함수
  function convertImageToBase64(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // Base64 문자열에서 실제 데이터 부분 추출
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(imageFile);
    });
  }

  const Star = ({ selected, onClick, starSize }) => (
    <span
      style={{ cursor: 'pointer', color: selected ? 'orange' : 'gray',
      fontSize: starSize || '24px', }}
      onClick={onClick}
    >
      &#9733;
    </span>
  );

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleConfirmClick = () => {
    // 별점 선택이 완료되었을 때 할 작업 추가
    console.log('Selected Rating:', rating);
    
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
    setInputValue(''); // 팝업이 열릴 때 입력값 초기화
    setRating(0);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const customStyles = {
    content: {
      width: '50%', 
      height: '40%',
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    textarea: {
        width: '100%',
        height: '200px', 
        marginBottom: '10px'
      },
    closeButton: {
        alignSelf: 'flex-end', 
        marginTop: '10px',
      },
  };

  

  return (
    <div>
      <div className="button-container">
  <button onClick={openModal}>리뷰 작성</button>
</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Popup with Input"
        style={customStyles}
      >
        <h2>리뷰 작성하기{data.id}</h2>
        <div style={customStyles.inputContainer}>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            style={customStyles.textarea}
            ref={detailRef}
          /></div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
         <div style={{ display: 'flex', alignItems: 'center' }}>
  <a>평점</a>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          selected={star <= rating}
          onClick={() => handleStarClick(star)}
          starSize={customStyles.closeButton}
        />
      ))}
      <button onClick={onSubmit}>완료</button>
      </div>
</div>
      </Modal>
      
    </div>
  );
}
export default PopupWithInput;