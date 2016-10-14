import React, { Component } from 'react';
import {Container} from 'react-layout-components';
import NavHeader from './NavHeader';
import HomePageInfoBox from './HomePageInfoBox';

class HomePageComponent extends Component {
  
  componentWillMount() {
    //
  }
  
  render() {
    const color1 = '#CC9900';
    const color2 = '#006699';
    const color3 = '#097054';
    const backgroundColor1 = '#DFA94F';

    return (
      <div>
        <NavHeader/>

        <div>
          <div className="fullBackground" style={{backgroundImage:'url(../img/concert-crowd-crop.jpg)'}}>
              <div className="autoMargin" id="pageintro">
                  <article>
                      <div className="overlay">
                          <p className="font-s nospace">还在烦恼如何发现你的粉丝吗？</p>
                          <h2 className="heading">让粉丝来发现你</h2>
                          <p>以最直接、有效的方式联系上客户群，推广你的品牌</p>
                      </div>
                      <ul>
                          <li style={{backgroundColor: color1}}><a className="btn" href="kolLogin/">我是网红</a></li>
                          <li style={{backgroundColor: color2}}><a className="btn btnVariatioin1" href="companyLogin/">品牌推广</a></li>
                          <li style={{backgroundColor: color3}}><a className="btn btnVariatioin2" href="learnMore/">了解更多</a></li>
                      </ul>
                  </article>
              </div>
          </div>
        </div>

        <Container margin="10%" marginTop="2%" marginBottom="2%" flex-basis="auto">
          <HomePageInfoBox title="我是网红" icon="rocket" color={color1} mainText="了解你的观众" subText="深入了解你的观众、粉丝人群，为他们提供更好的内容。"/>
          <HomePageInfoBox title="我是网红" icon="rocket" color={color2} mainText="了解你的观众" subText="深入了解你的观众、粉丝人群，为他们提供更好的内容。"/>
          <HomePageInfoBox title="我是网红" icon="rocket" color={color3} mainText="了解你的观众" subText="深入了解你的观众、粉丝人群，为他们提供更好的内容。"/>
        </Container>

        <Container style={{backgroundColor: backgroundColor1}}>
          some pictures
        </Container>

        <div>
            <a href={'/register'}>link to register</a>
        </div>
      </div>
    );
  }
}

export default HomePageComponent;

