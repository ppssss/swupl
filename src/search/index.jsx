import React from "react";
import "../publicData";
import st from "./st.modules.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input, List, Row, Col } from "antd";
const { Search } = Input;

export default class Search1 extends React.Component {
  state = {
    winW: document.body.clientWidth,
    url: global.data.url,
    arr: [],
  };

  onSearch = (v) => {
    console.log(v);
    axios.get("getSearchMsg", { params: { keyword: v } }).then((arr) => {
      arr.map((el) => {
        el.img = el.content.match(/<img[^>]+>/)[0];
        return el;
      });

      this.setState({
        arr,
      });
      console.log(this.state.arr[0]);
    });
  };
  render() {
    const { url, winW, arr, artType } = this.state;
    return (
      <div className="search">
        <img height={`${winW * 0.25}`} src={`${url}images/home2.jpg`} alt="" />
        <Search
          placeholder="input search text"
          onSearch={this.onSearch}
          enterButton
          style={{width:'70%',margin:'30px auto'}}
        />
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={arr}
          renderItem={(item) => (
            <Row justify="center">
              <Col sm={23} xl={20}>
                
                <Link
                  to={{
                    pathname: `/artdetails/${item.id}`,
                    state: { artType: "", newType: "" },
                  }}
                >
                  <List.Item
                    style={{
                      borderBottom: "1px solid black",
                      alignItems: "center",
                    }}
                    key={item.id}
                    extra={
                      <div
                        className="smlimg"
                        dangerouslySetInnerHTML={{ __html: item.img }}
                      ></div>
                    }
                  >
                    <List.Item.Meta
                      // avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      // description={item.description}
                    />
                  </List.Item>
                </Link>
              </Col>
            </Row>
          )}
        />
        ,
      </div>
    );
  }
}
