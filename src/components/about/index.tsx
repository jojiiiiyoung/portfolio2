import React from "react";

import "./style.css";
import Badge from "../common/badge";

const About = (): React.ReactElement => {
  return (
    <section id="about">
      <div className="container">
        <div>
          <h3 className="section-title">About</h3>
          <div className="section-title-divider" />
          <div className="section-description">
            <div className="box">
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <span>SK Planet Co.</span>
              </h4>
              <div className="description">
                <span className="period">2018.06 - 현재</span>
                <br />
                Web(PC, mobile) front-end 개발
                <ul className="skill-list">
                  <li>
                    <Badge text="typescript" />
                  </li>
                  <li>
                    <Badge text="react" />
                  </li>
                  <li>
                    <Badge text="redux" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <span>Vingle Co. </span>
              </h4>
              <div className="description">
                <span className="period">2018.01 - 2018.06</span>
                <br />
                Web(PC, mobile) front-end 개발
                <ul className="skill-list">
                  <li>
                    <Badge text="typescript" />
                  </li>
                  <li>
                    <Badge text="React" />
                  </li>
                  <li>
                    <Badge text="Redux" />
                  </li>
                  <li>
                    <Badge text="SSR" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <span>Tmax soft Co.</span>
              </h4>
              <div className="description">
                <span className="period">2015.02 - 2017.11</span>
                <br />
                Enterprise용 UI platform, framework 설계 및 개발
                <ul className="skill-list">
                  <li>
                    <Badge text="javascript" />
                  </li>
                  <li>
                    <Badge text="java" />
                  </li>
                  <li>
                    <Badge text="C#" />
                  </li>
                  <li>
                    <Badge text="android" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="about-container">
          <div className="about-img">
            <span className="bg-source">
              Photo by{" "}
              <a href="https://unsplash.com/@ewan121?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Ewan Robertson
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/yak-shaver?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </div>

          <div className="about-content">
            <h2 className="about-title">
              배움의 기회를 놓지 않는 야크 쉐이버(Yak shaver)
            </h2>
            <p className="about-text">
              처음 javascript 프레임워크 개발에 투입되었을 당시 해당
              프레임워크로 개발된 UI가 끊겨 보이는 현상이 있었습니다. 코드
              상에는 문제를 찾기 어려운 상황이었기에 javascript UI 랜더링 자체에
              대한 궁금증이 생겼습니다. <br />
              V8 엔진 상에서의 javascript 싱글쓰레드 동작 방식과 이벤트 큐에
              대한 연구를 통해 해당 현상의 원인을 파악하였습니다. 파악한 내용을
              팀원들과 공유함으로써 프레임워크의 전반적인 수정 작업을 이끌어 낼
              수 있었습니다.
            </p>
            <p className="about-text">
              <strong>
                불필요해 보이더라도 약간이나마 관련이 있는 지식이라면 남에게
                미루지 않고 직접 깊이 파고드는 것이 저만의 야크쉐이빙입니다.
                이를 바탕으로 고성능과 안정성을 보장하는 프론트엔드 개발을
                지속적으로 하고 싶습니다.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;