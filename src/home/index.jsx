import st from "./st.module.scss";
import {
  ContainerOutlined,
  FileSearchOutlined,
  UserOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { React, useEffect, useState } from "react";
import "../publicData";
import { Carousel, Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Home = () => {
  const handleScroll = () => {
    let scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    setScroTop(scrollTop);
  };

  const [scroTop, setScroTop] = useState(0);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr3, setArr3] = useState([]);
  const [arr4, setArr4] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    axios.get("getData").then((arr) => {
      arr[1] = arr[1].map((el) => {
        el.src = el.content.match(/src="[^"]+/)[0].substr(5);
        el.description = el.content
          .match(/<p>[^<]+/)[0]
          .substr(3)
          .substr(0, 70);
        return el;
      });
      setArr1(arr[1]);

      arr[2] = arr[2].map((el) => {
        el.description = el.content
          .match(/<p>[^<]+/)[0]
          .substr(3)
          .substr(0, 70);
        return el;
      });
      setArr2(arr[2]);

      arr[3] = arr[3].map((el) => {
        el.src = el.content.match(/src="[^"]+/)[0].substr(5);
        el.description = el.content
          .match(/<p>[^<]+/)[0]
          .substr(3)
          .substr(0, 70);
        el.date = new Date(el.updatedAt).toLocaleDateString();
        return el;
      });
      setArr3(arr[3]);

      arr[4] = arr[4].map((el) => {
        el.src = el.content.match(/src="[^"]+/)[0].substr(5);
        el.description = el.content
          .match(/<p>[^<]+/)[0]
          .substr(3)
          .substr(0, 70);
        return el;
      });
      setArr4(arr[4]);
    });
  }, [scroTop]);

  useEffect(() => {}, [arr1, arr2, arr3, arr4]);
  const arr = [1, 2];
  const url = global.data.url;
  return (
    <div className={st.home}>
      <Row>
        <Col
          style={{ background: "burlywood" }}
          className={st.cardleft}
          xl={3}
          sm={4}
        >
          <ul style={{ top: scroTop }} className={st.list}>
            <li>
              <Card
                size="small"
                title={<ContainerOutlined style={{ fontSize: "25px" }} />}
              >
                招生
              </Card>
            </li>
            <li>
              <Card
                size="small"
                title={<UserOutlined style={{ fontSize: "25px" }} />}
              >
                就业
              </Card>
            </li>
            <li>
              <Card
                size="small"
                title={<FileSearchOutlined style={{ fontSize: "25px" }} />}
              >
                人才引进
              </Card>
            </li>
            <li>
              <Card
                size="small"
                title={<TeamOutlined style={{ fontSize: "25px" }} />}
              >
                导航
              </Card>
            </li>
          </ul>
        </Col>
        <Col xl={21} sm={20}>
          <Carousel autoplay>
            {arr.map((el, i) => {
              return (
                <img key={i} src={`${url}images/home${i + 1}.jpg`} alt="" />
              );
            })}
          </Carousel>
          <div className={st.two}>
            <p
              style={{
                paddingTop: 20,
                background: "transparent",
                fontSize: 23,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              <Link to="/artlist/headlines">
                <BarChartOutlined />
                要闻动态
              </Link>
            </p>
            <Row gutter={[18, 16]}>
              {arr1.map((el, i) => {
                return (
                  <Col key={i} span={6}>
                    <Link
                      to={{
                        pathname: `/artdetails/${el.id}`,
                        state: { artType: "要闻动态", newType: "headlines" },
                      }}
                    >
                      <Card
                        className={st.card}
                        hoverable
                        cover={
                          <img
                            style={{ height: 250 }}
                            alt="example"
                            src={el.src}
                          />
                        }
                      >
                        <Meta title={el.title} description={el.description} />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        className={st.three}
        style={{
          background: ` url('${url}images/bg2.png') no-repeat`,
          backgroundSize: "100% 100%",
          margin: "0 auto",
        }}
      >
        <Col className={st.threeleft} xl={9} sm={12}>
          <p className={st.tit}>
            <Link to="/artlist/comprehensive">
              <BarChartOutlined />
              科学研究
            </Link>
          </p>
          <nav>
            <Button type="primary" shape="round">
              法学学部
            </Button>
            <Button type="primary" shape="round">
              文学新部
            </Button>
            <Button type="primary" shape="round">
              政教学部
            </Button>
            <Button type="primary" shape="round">
              经管学部
            </Button>
            <Button type="primary" shape="round">
              经管学部
            </Button>
          </nav>
          <p style={{ textAlign: "left", paddingTop: 30 }}>
            <Button
              style={{
                background: "rgb(129, 13, 13)",
                borderRadius: "0 15px 15px 0",
                color: "white",
              }}
              size="large"
            >
              活动预告
            </Button>
          </p>
          <Carousel autoplay dots={false}>
            {arr2.map((el, i) => {
              return (
                <div key={i}>
                  <h2 style={{ fontSize: "blod" }}>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              );
            })}
          </Carousel>
          <Row>
            <Col className={st.artcomment} sm={12}>
              <p style={{ textAlign: "left", paddingTop: 30 }}>
                <Button
                  style={{
                    background: "rgb(129, 13, 13)",
                    borderRadius: "0 15px 15px 0",
                    color: "white",
                  }}
                  size="large"
                >
                  文章推荐
                </Button>
              </p>
              <ul>
                {arr3.slice(0, 3).map((el, i) => {
                  return (
                    <Link
                      key={i}
                      to={{
                        pathname: `/artdetails/${el.id}`,
                        state: {
                          artType: "科学研究",
                          newType: "comprehensive",
                        },
                      }}
                    >
                      <li>
                        <h4>{el.title}</h4>
                        <p>{el.description}</p>
                        <p className={st.b}>{el.date}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </Col>
            <Col className={st.objshow} sm={12}>
              <p style={{ textAlign: "left", paddingTop: 30 }}>
                <Button
                  style={{
                    background: "rgb(129, 13, 13)",
                    borderRadius: "0 15px 15px 0",
                    color: "white",
                  }}
                  size="large"
                >
                  项目巡展
                </Button>
              </p>
              <ul>
                {arr2.slice(0, 3).map((el, i) => {
                  return (
                    <Link
                      key={i}
                      to={{
                        pathname: `/artdetails/${el.id}`,
                        state: {
                          artType: "科学研究",
                          newType: "comprehensive",
                        },
                      }}
                    >
                      <li>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className={st.threeright} xl={9} sm={12}>
          <p className={st.tit}>
            <Link to="/artlist/learning">
              <BarChartOutlined />
              人才培养
            </Link>
          </p>
          <img src={`${url}images/home1.jpg`} alt="" />
          <Col className={st.notice}>
            <p className={st.tit}>
              <Link to="/artlist/learning">
                <BarChartOutlined />
                通知公告
              </Link>
            </p>
            {arr4.slice(0, 4).map((el, i) => {
              return (
                <Link
                  key={i}
                  to={{
                    pathname: `/artdetails/${el.id}`,
                    state: { artType: "通知公告", newType: "learning" },
                  }}
                >
                  <div className={st.not}>
                    <div>
                      <div className={st.out}></div>
                      <div className={st.into}>14</div>
                    </div>
                    <span>{el.title}</span>
                  </div>
                </Link>
              );
            })}
            <img
              style={{
                width: "45%",
                boxSizing: " border-box",
                marginRight: "10px",
                border: "2px solid rgb(167, 135, 49)",
              }}
              src={`${url}images/home2.jpg`}
              alt=""
            />
            <img
              style={{
                width: "45%",
                boxSizing: " border-box",
                border: "2px solid rgb(167, 135, 49)",
              }}
              src={`${url}images/home1.jpg`}
              alt=""
            />
          </Col>
        </Col>
      </Row>
      <Row
        justify="center"
        className={st.four}
        style={{ background: `url('${url}images/bg3.png')` }}
      >
        <Col sm={24} xl={17}>
          <p className={st.tit}>
            <Link to="/artlist/story">
              <BarChartOutlined />
              多彩校园
            </Link>
          </p>
        </Col>
        <Row gutter={[5, 5]} justify="center">
          <Col className={st.fourl} sm={6} xl={4}>
            <Link
              
              to={{
                pathname: `/artdetails/74`,
                state: { artType: "多彩校园", newType: "story" },
              }}
            ><img src={`${url}adv1/adv1.jpg`} alt="" /></Link>
             <Link
              to={{
                pathname: `/artdetails/75`,
                state: { artType: "多彩校园", newType: "story" },
              }}
            ><img src={`${url}adv1/adv2.jpg`} alt="" /></Link>
            
          </Col>
          <Col className={st.fourm} sm={12} xl={9}>
          <Link
              to={{
                pathname: `/artdetails/76`,
                state: { artType: "多彩校园", newType: "story" },
              }}
            ><img src={`${url}adv1/adv3.jpg`} alt="" /></Link>
          </Col>
          <Col className={st.fourr} sm={6} xl={4}>
          <Link
              to={{
                pathname: `/artdetails/77`,
                state: { artType: "多彩校园", newType: "story" },
              }}
            ><img src={`${url}adv1/adv4.jpg`} alt="" /></Link>
            <Link
              to={{
                pathname: `/artdetails/78`,
                state: { artType: "多彩校园", newType: "story" },
              }}
            ><img src={`${url}adv1/adv5.jpg`} alt="" /></Link>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
export default Home;
