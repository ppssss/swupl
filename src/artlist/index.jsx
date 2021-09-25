import st from "./st.module.scss";
import "../publicData";
import axios from "axios";
import { useEffect, useState } from "react";
import { List, Row, Col, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

let arr = [];

const Artlist = (props) => {
  const winW = document.body.clientWidth;
  const url = global.data.url;
  let newType = props.match.params.newType;
  console.log(newType);
  const [artType, setArtType] = useState("");
  const [arr1, setArr1] = useState([]);

  arr = arr1;

  useEffect(() => {
    switch (newType) {
      case "headlines":
        setArtType("要闻动态");
        break;
      case "comprehensive":
        setArtType("科学研究");
        break;
      case "learning":
        setArtType("人才培养");
        break;
      case "story":
        setArtType("多彩校园");
        break;
        default:
    }
    (async () => {
      const getarr = await axios.get("getNews", { params: { newType } });
      setArr1(getarr);
    })();
  }, [newType]);
  // useEffect(() => {}, [arr1]);

  return (
    <div className={st.list}>
      <img
        height={`(${winW}*25%)px`}
        width={"100%"}
        src={`${url}images/artlist.jpg`}
        alt=""
      />
      <Row justify="center">
        <Col className={st.left} xl={6} sm={5}>
          <ul>
            <li style={{ background: `url('${url}images/bg3.png')` }}>
              {artType}
            </li>
            <li>活动推荐</li>
            <li>文章推荐</li>
            <li>项目巡展</li>
          </ul>
        </Col>
        <Col xl={15} sm={19}>
          <p
            style={{ background: `url(${url}images/bg4.png)` }}
            className={st.tit}
          >
            {artType}
            <span>
              <Breadcrumb separator=">">
                <Breadcrumb.Item  href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item >{artType}</Breadcrumb.Item>
              </Breadcrumb>
            </span>
          </p>
          <List
            style={{ marginTop: "5px" }}
            itemLayout="vertical"
            size="large"
            bordered
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={arr.map((el) => {
              el.img = el.content.match(/<img[^>]+>/)[0];
              el.content = el.content.match(/<p>[^>]+>/);
              el.date = new Date(el.updatedAt).toLocaleDateString();

              console.log(el);
              return el;
            })}
            renderItem={(item) => (
              <Link to={{pathname:`/artdetails/${item.id}`,state:{artType,newType}}}>
                <List.Item
                  style={{ borderBottom: "1px solid rgb(184, 180, 180)" }}
                  key={item.id}
                  actions={[item.date]}
                  extra={
                    <div
                      className={st.smlimg}
                      dangerouslySetInnerHTML={{ __html: item.img }}
                    ></div>
                  }
                >
                  <List.Item.Meta
                    title={<p style={{ fontSize: "20px" }}>{item.title}</p>}
                  />
                  <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </List.Item>
              </Link>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};
export default Artlist;
