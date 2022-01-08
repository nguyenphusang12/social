import React, { useRef, useState } from "react";

function CreatePost(props) {
  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);

  const handleUpload = () => {
    console.log(file);
  };
  const showImage = () => {
    if (image) {
      return image.map((item, index) => (
        <img
          key={index}
          alt={file[index].name}
          className="preview-image"
          src={item}
        />
      ));
    }
  };

  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.click();
  };
  const handleShowModalAndUpfile = () => {
    props.showModal();
    myRef.current.click();
  };

  const onchange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((item) =>
      URL.createObjectURL(item)
    );
    setFile([...file, ...files]);

    setImage([...image, ...fileArray]);

    Array.from(files).map((item) => URL.revokeObjectURL(item));
  };

  return (
    <div className="create-post">
      <div className="create-post-top">
        <img
          className="create-post-top__img"
          src="./assets/img/rsz_girl-xinh-600x600.jpg"
          alt=""
        />
        <div className="create-post-top__select" onClick={props.showModal}>
          <span className="create-post-top__select-text">
            Phú sang, Bạn đang nghĩ gì ?
          </span>
        </div>
      </div>
      <hr style={{ opacity: "0.2" }} />
      <div className="create-post-option">
        <div className="create-post-item" onClick={handleShowModalAndUpfile}>
          <i
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/sarKRwPv0gl.png")',
              backgroundPosition: "0 -225px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          />
          <span>Ảnh/Video</span>
        </div>
        <div className="create-post-item">
          <i
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/sarKRwPv0gl.png")',
              backgroundPosition: "0 -100px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          />
          <span>Gắn thẻ bạn bè</span>
        </div>
        <div className="create-post-item">
          <i
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/sarKRwPv0gl.png")',
              backgroundPosition: "0 -25px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          />
          <span>Cảm xúc/Hoạt động</span>
        </div>
      </div>
      <div className="modal">
        <div className="modal-overlay" onClick={props.closeModal}></div>
        <div className="modal-body">
          <div className="modal-close" onClick={props.closeModal}>
            <i className="fas fa-times-circle" />
          </div>
          <div className="form-creat">
            <h2 className="form-title">Tạo bài viết</h2>
            <div className="form-user">
              <img
                className="form-user-img"
                src="./assets/img/rsz_girl-xinh-600x600.jpg"
                alt=""
              />
              <h3 className="form-user-name">Nguyễn Phú Sang</h3>
            </div>
            <textarea
              type="text"
              spellCheck="false"
              className="form-text"
              placeholder="Bạn đang nghĩ gì?"
              defaultValue={""}
            />
            <div id="preview">{showImage()}</div>

            <div className="form-add">
              <p className="form-add-text">Thêm vào bài viết</p>
              <div className="form-add-icon">
                <div className="form-add-icon-item" onClick={handleClick}>
                  <i
                    style={{
                      height: "24px",
                      width: "24px",
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png)",
                      backgroundPosition: "0px -225px",
                      backgroundSize: "auto",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  />
                  <input
                    hidden
                    ref={myRef}
                    type="file"
                    accept=".jpg, .png, .jpeg, .gif"
                    multiple
                    onChange={onchange}
                  />
                </div>
                <div className="form-add-icon-item">
                  <i
                    style={{
                      height: "24px",
                      width: "24px",
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png)",
                      backgroundPosition: "0px -100px",
                      backgroundSize: "auto",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div className="form-add-icon-item">
                  <i
                    style={{
                      height: "24px",
                      width: "24px",
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png)",
                      backgroundPosition: "0px -25px",
                      backgroundSize: "auto",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  />
                </div>
              </div>
            </div>
            <button className="form-add-btn" onClick={handleUpload}>
              Đăng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
