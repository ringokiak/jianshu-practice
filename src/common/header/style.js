import styled from "styled-components";
import Logo from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  max-width: 1440px;
  min-width: 1200px;
  margin: 0 auto;
  height: 56px;
  display: flex;
  align-item: center;
  overflow: hidden;
  position: relative;
`;

export const HeaderLogo = styled.a.attrs({
  href: "/"
})`
  height: 100%;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: url('${Logo}') center center / contain no-repeat;
`;

export const MidContainer = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: 80px;
`;

export const MidItem = styled.div`
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
    margin-right: 10px;
  }
  &.right {
    margin-left: 10px;
    float: right;
    color: #969696;
  }
  box-sizing: border-box;
  padding: 15px;
  color: #333;
  font-size: 17px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MidSearch = styled.div`
  box-sizing: border-box;
  color: #333;
  font-size: 17px;
  height: 100%;
  position: relative;
  width: 150px;
  box-sizing: border-box;
  height: 38px;
  line-height: 38px;
  margin-top: 9px;
  padding: 0 40px 0 20px;
  float: left;
  transition: width 0.4s ease-in-out;
  &.focus {
    width: 240px;
  }
`;

export const SearchInp = styled.input.attrs({
  placeholder: "搜索"
})`
  &::placeholder {
    color: #999;
  }
  border: none;
  outline: none;
  background: #eee;
  border-radius: 19px;
  font-size: 14px;
  width: 100%;
  height: 38px;
  line-height: 38px;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
`;

export const HeaderBtn = styled.div`
  box-sizing: border-box;
  padding: 6px 12px;
  height: 38px;
  line-height: 25px;
  margin-top: 9px;
  border-radius: 19px;
  font-size: 15px;
  border: 1px solid #ea6f5a;
  text-align: center;
  float: left;
  &.reg {
    color: #ea6f5a;
    width: 78px;
  }
  &.write {
    margin-left: 20px;
    background: #ea6f5a;
    color: #fff;
    width: 98px;
  }
`;
