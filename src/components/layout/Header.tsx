import './Header.css';
import * as React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useRef } from 'react';
import UserImg from "../../../public/user.png";

export const Header = () => {
  type UplodaImage = {
    file:File;

  }
  const [FearGreed, setFrearGreed] = useState<boolean>(false);
  const [MyInfo, setMyInfo] = useState<boolean>(false);
  const [imgFile, setImgFile] = useState<UplodaImage | null>(null);
  const imgRef = useRef<HTMLInputElement>();

  const ViewImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
       };
  };
  
  const ServerUpload = async(e:any) =>{
    e.preventDefault();
    const id = localStorage.getItem("id")

    const img = e.target.file.files[0]
    const formData = new FormData();
    formData.append('file',img)
    formData.append('id',id)

    
    
   await axios.post('http://localhost:3000/img/upload',formData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error.message);
    })
    
  }
  return (
    <header className="Header">
      <div className="Header_Left">
        <span className="Header_Left_CRYPO">
          ROROBINCOIN
        </span>
        <span></span>
      <Button onClick={() => setFrearGreed(true)}
      style={{backgroundColor:"rgb(19, 23, 24)",fontSize:'15px',border: 'none'
      ,verticalAlign:'2px'
      }}>
        Fear&Greed
      </Button>
      <Modal
        size="lg"
        show={FearGreed}
        onHide={() => setFrearGreed(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div>Fear & Greed</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img style={{maxWidth:"100%",height:"auto"}} src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
        </Modal.Body>
      </Modal>
      <Button onClick={() => setMyInfo(true)}
      style={{backgroundColor:"rgb(19, 23, 24)",fontSize:'15px',border: 'none'
      ,verticalAlign:'2px'
      }}>
        My Info
      </Button>
      <Modal
        size="lg"
        show={MyInfo}
        onHide={() => setMyInfo(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            My Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign:'center'}}>
            <img style={{width:'20vw',height:'20vh', borderRadius:'20vw'}} 
            src={imgFile ?imgFile:UserImg}/>



            <form onSubmit={ServerUpload} >
              <label htmlFor="profileImg" style={{color:"blue"}}>            
                Image Upload
              </label>
                <input
                style={{display:'none'}}
                type="file"
                name='file'
                accept='image/*'
                id="profileImg"
                onChange={ViewImgFile}
                ref={imgRef}
                />
            <div>Image Delete</div>
            <div>User Id</div>
            <button type='submit'>save</button>
            </form>
          </div>
          {/* <div>즐겨찾을 목록</div>
          <div>접속 시간?</div> */}
        </Modal.Body>
      </Modal>
      </div>
    </header>
  );
};
