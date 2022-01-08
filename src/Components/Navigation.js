import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="col l3">
                    <div className="navigation">
                      <ul className="navigation-list">
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-user" /> Nguyễn Phú Sang
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-user-friends" /> Bạn bè
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-history" /> Kỉ niệm
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Nhóm
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-store" /> Marketplace
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-tv" /> Watch
                          </a>
                        </li>
                      </ul>
                      <hr />
                      <h2 className="navigation-title">Lối tắt của bạn</h2>
                      <ul className="navigation-list">
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Hội người cao tuổi
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Hội người già
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Hội trẻ em
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Bán hàng online
                          </a>
                        </li>
                        <li className="navigation-item">
                          <a href="/" className="navigation-item__link">
                            <i className="fas fa-users" /> Chuyên quần áo
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
        );
    }
}

export default Navigation;