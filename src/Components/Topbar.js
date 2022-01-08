import React, { Component } from 'react';

class Topbar extends Component {
    
    render() {
        return (
            <div className="topbar">
            <a className="topbar-logo" href="/">
              <img className="topbar-logo__img" src="./assets/img/logo.png" alt="" />
              <span className="topbar-logo__text">Pink</span>
            </a>
            <form className="topbar-input">
              <input type="text" spellCheck="false" placeholder="Nhấp để tìm..." />
              <button>
                <i className="ti-search" />
              </button>
            </form>
            <div className="topbar-page-name">
              NEWSFEED
            </div>
            <ul className="topbar-setting-area">
              <li className="topbar-setting__item">
                <a href="/" className="topbar-setting__item-icon">
                  <i className="fa fa-home" />
                </a>
              </li>
              {/* add class active  */}
              <li className="topbar-setting__item show">
                <div className="topbar-setting__item-icon">
                  <i className="fa fa-user" />
                  <span className="ripple bg-red">4</span>
                </div>
                <ul className="dropdown">
                  <div className="dropdown__title">
                    <h1>4 bạn mới</h1>
                    <a href="/">Xem tất cả</a>
                  </div>
                  <li className="dropdown__item">
                    <img className="dropdown__img" src="./assets/img/24327647_366030097135870_7525375755971198976_n.jpg" alt="" />
                    <div className="dropdown__body">
                      <h3 className="dropdown__name">sarah Loren</h3>
                      <p className="dropdown__message">Muốn trở thành bạn bè với bạn</p>
                    </div>
                    <div className="add-del-fr">
                      <i className="fas fa-user-plus add-fr" />
                      <i className="far fa-trash-alt delete" />
                      <p className="time-add">2 days ago</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="topbar-setting__item show">
                <div className="topbar-setting__item-icon">
                  <i className="fa fa-bell" />
                  <span className="ripple bg-purple">6</span>
                </div>
                <ul className="dropdown">
                  <div className="dropdown__title">
                    <h1>6 thông báo mới</h1>
                    <a href="/">Xem tất cả</a>
                  </div>
                  <li className="dropdown__item">
                    <img className="dropdown__img" src="./assets/img/24327647_366030097135870_7525375755971198976_n.jpg" alt="" />
                    <div className="dropdown__body">
                      <h3 className="dropdown__name">sarah Loren</h3>
                      <p className="dropdown__message">đã thêm 5 ảnh mới</p>
                    </div>
                    <div className="add-del-fr">
                      <p className="time-add">2 days ago</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="topbar-setting__item show">
                <div className="topbar-setting__item-icon">
                  <i className="fas fa-comment" />
                  <span className="ripple bg-blue">9</span>
                </div>
                <ul className="dropdown">
                  <div className="dropdown__title">
                    <h1>9 tin nhắn</h1>
                    <a href="/">Xem tất cả</a>
                  </div>
                  <li className="dropdown__item">
                    <img className="dropdown__img" src="./assets/img/24327647_366030097135870_7525375755971198976_n.jpg" alt="" />
                    <div className="dropdown__body">
                      <h3 className="dropdown__name">sarah Loren</h3>
                      <p className="dropdown__message">mày đang làm gì thế ??</p>
                    </div>
                    <div className="add-del-fr">
                      <p className="time-add">2 days ago</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="topbar-setting__item">
                <div className="topbar-setting__item-icon">
                  <i className="fa fa-globe" />
                  <span className="ripple">EN</span>
                </div>
              </li>
              <li className="topbar-setting__item">
                <div className="topbar-setting__item-icon">
                  <i className="fa fa-question-circle" />
                </div>
              </li>
            </ul>
            <div className="topbar-user">
              <span className="topbar-user__name">Nguyễn Phú Sang</span>
              <img src="./assets/img/rsz_girl-xinh-600x600.jpg" alt="" className="topbar-user__avt" />
            </div>
            <div className="topbar-menu-seting">
              <i className="ti-settings" />
              <div className="topbar-menu-wrap">
                <ul className="topbar-menu-list">
                  <li className="topbar-menu-item">
                    Trang cá nhân của bạn
                  </li>
                  <li className="topbar-menu-item">
                    Cài đặt &amp; quyền riêng tư
                  </li>
                  <li className="topbar-menu-item">
                    Trợ giúp &amp; hỗ trợ
                  </li>
                  <hr style={{marginBottom: '4px'}} />
                  <li className="topbar-menu-item">
                    Đăng xuất
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Topbar;