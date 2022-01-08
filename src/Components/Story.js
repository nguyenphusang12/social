import React, { Component } from 'react';

class Story extends Component {
    render() {
        return (
            <div className="story">
                      <div className="row">
                        <div className="col l24">
                          <div className="story-item-create">
                            <img src="./assets/img/girl-xinh-600x600.jpg" alt="" />
                            <div className="story-item__btn-create">
                              <div className="story-item__btn-bg">
                                <div className="story-item__btn-cong" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col l24">
                          <div className="story-item">
                            <div className="story-item-user">
                              <img src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/206857022_1879291472250887_2566054231303151507_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ol975tQQcC4AX_emQPs&_nc_ht=scontent.fhph2-1.fna&oh=49c017a1bd90fc73efde607c2638815a&oe=617D136E" alt="" />
                            </div>
                            <div className="story-item-img" style={{backgroundImage: 'url("https://chiase24.com/wp-content/uploads/2020/03/Tong-hop-hinh-anh-Girl-xinh-Au-My-dep-nhat-4.jpg")'}} />
                            <div className="story-item-name">Phú Sang</div>
                          </div>
                        </div>
                        <div className="col l24">
                          <div className="story-item">
                            <div className="story-item-user">
                              <img src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/photo-1-1626325991293621230585.jpg" alt="" />
                            </div>
                            <div className="story-item-img" style={{backgroundImage: 'url("https://i.pinimg.com/originals/6b/b6/bf/6bb6bf1f7c0a97e7daabf783d1153b3d.jpg")'}} />
                            <div className="story-item-name">Bảo Vy</div>
                          </div>
                        </div>
                        <div className="col l24">
                          <div className="story-item">
                            <div className="story-item-user">
                              <img src="https://pbs.twimg.com/profile_images/1414610336007692290/syQn5ZTo.jpg" alt="" />
                            </div>
                            <div className="story-item-img" style={{backgroundImage: 'url(https://i.pinimg.com/564x/2b/3b/0a/2b3b0a8acd5851081408365e6f2948b1.jpg)'}} />
                            <div className="story-item-name">Hoài An</div>
                          </div>
                        </div>
                        <div className="col l24">
                          <div className="story-item">
                            <div className="story-item-user">
                              <img src="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_3.jpg" alt="" />
                            </div>
                            <div className="story-item-img" style={{backgroundImage: 'url("https://i.pinimg.com/474x/b9/da/95/b9da95c08754147568bb999443af4972.jpg")'}} />
                            <div className="story-item-name">Khả Hân</div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-view-all">
                        <i className="btn-view-icon fas fa-long-arrow-alt-right" />
                      </div>
                    </div>
        );
    }
}

export default Story;