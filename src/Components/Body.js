import React, { Component } from 'react';
import Navigation from './Navigation';
import Story from './Story';
import CreatePost from './CreatePost';
import Posts from './Posts';
import Complementary from './Complementary';

class Body extends Component {
   showModal() {
    const element = document.querySelector('.modal');
    element.classList.add('show-modal');
  }
  
   closeModal() {
    const element = document.querySelector('.modal');
    element.classList.remove('show-modal');
  }
    render() {
        return (
            <div className="container">
              <div className="grid">
                <div className="row">
                  <Navigation/>
                  <div className="col l6">
                    <Story/>
                    <div className="main">
                      <CreatePost showModal={this.showModal} closeModal={this.closeModal}/>
                      <Posts/>
                    </div>
                  </div>
                  <Complementary/>
                </div>
              </div>
            </div>

        );
    }
}

export default Body;