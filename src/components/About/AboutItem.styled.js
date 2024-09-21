import styled from "styled-components";
import { blue } from "../utils/index";

export const AboutItemWrapper = styled.div`
  overflow: hidden;
  margin-top:20px;
  background-color: ${(props) =>
    props.color ? props.color["60"] : blue["60"]};

  color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
  box-shadow: 6px 6px 0
    ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border-radius: 1rem;
  width: 90px;
  height: 90px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  .logo {
    max-width: 100%;
    height: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    display: none;
  }

  &.active {
    width: 400px;
    justify-content: start;
    .text {
      color:white;
      min-width: max-content;
      display: block;
      overflow-wrap: break-word;
      min-width: unset;
      line-height: 1;
      h3 {
        font-size:  1rem;
      }
      p {
        color:white;
        margin-top: 4px;
        font-size: 0.75rem;
      }
    }
  }
  @media screen and (max-width: 720px) {
    width: 70px;
    height: 70px;
    .logo {
      min-width: 45px;
      width: 45px;
      height: 45px;
    }
    &.active {
      width: 300px;
      .text {
        overflow-wrap: break-word;
        min-width: unset;
        line-height: 0.8rem;
        h3 {
          font-size:0.75rem;
        }
        p {
          font-size: 0.563rem;
        }
      }
    }
  }
`;