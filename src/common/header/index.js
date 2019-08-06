import React from "react";
import {
  HeaderWrapper,
  HeaderLogo,
  MidContainer,
  MidItem,
  MidSearch,
  HeaderRight,
  HeaderBtn,
  SearchInp
} from "./style";
import { connect } from "react-redux";
import actionCreators from "./store/actionCreators";

const Header = props => {
  return (
    <div style={{ borderBottom: "1px solid #e7e7e7" }}>
      <HeaderWrapper>
        <HeaderLogo />
        <MidContainer>
          <MidItem className="left active">首页</MidItem>
          <MidItem className="left">下载APP</MidItem>
          <MidSearch className={props.focus ? "focus" : ""}>
            <SearchInp onBlur={props.inpBlur} onFocus={props.inpFocus} />
            <i
              style={{
                position: "absolute",
                right: 10,
                top: 0,
                zIndex: 2,
                fontSize: 22,
                color: "#999"
              }}
              className="iconfont iconsearch"
            />
          </MidSearch>
          <MidItem className="right">登录</MidItem>
          <MidItem className="right">
            <i style={{ fontSize: 22 }} className="iconfont iconAa" />
          </MidItem>
        </MidContainer>
        <HeaderRight>
          <HeaderBtn className="reg">注册</HeaderBtn>
          <HeaderBtn className="write">
            <i
              style={{ fontSize: 15, marginRight: 5 }}
              className="iconfont iconpen"
            />
            写文章
          </HeaderBtn>
        </HeaderRight>
      </HeaderWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    focus: state.header.focus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inpFocus() {
      dispatch(actionCreators.inpFocus());
    },
    inpBlur() {
      dispatch(actionCreators.inpBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
