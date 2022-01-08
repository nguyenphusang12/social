import React, { Component } from 'react';

class Posts extends Component {
    render() {
        return (
            <div className="posts">
            <div className="posts-user ">
              <img className="posts-user-img " src="./assets/img/rsz_girl-xinh-600x600.jpg " alt=" " />
              <div className="posts-user-info ">
                <h2 className="posts-user-name ">Phu Sang</h2>
                <span className="posts-user-time ">1 <span>giờ trước</span></span>
              </div>
            </div>
            <div className="posts-content ">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi at quas dolorem, doloremque beatae iure? Deleniti totam, pariatur cum laudantium aliquam perferendis vel dignissimos quasi quia odit aut earum consequuntur.</p>
            </div>
            <hr style={{opacity: '0.3', margin: '8px 0'}} />
            <div className="posts-user-emotion ">
              <div className="posts-user-emotion__item ">
                <i className="posts-user-emotion__icon fas fa-thumbs-up " /> Thích
              </div>
              <div className="posts-user-emotion__item ">
                <i className="posts-user-emotion__icon fas fa-comment " /> Bình luận
              </div>
              <div className="posts-user-emotion__item ">
                <i className="posts-user-emotion__icon fas fa-share " /> Chia sẻ
              </div>
            </div>
          </div>
        );
    }
}

export default Posts;