import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import { styleSet } from "../../../commons/styles/styleSet";

const Modal = styled.section`
  width: 30%;
  height: 500px;
  background: ${styleSet.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${styleSet.colors.darkgray};
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  z-index: 11;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
`;

const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
`;

const Textarea1 = styled.textarea`
  resize: none;
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${styleSet.colors.gray};
  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 100px;
  font-size: ${styleSet.fontSize.s7};
  font-family: ${styleSet.font.B};
  border: 1px solid ${styleSet.colors.black};
  position: relative;
  color: ${styleSet.colors.black};
  overflow: hidden;
  background: ${styleSet.colors.white};
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.black};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }
`;

const BgLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
const Close = styled(CloseCircleOutlined)`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: ${styleSet.fontSize.s6};
  cursor: pointer;
  color: ${styleSet.colors.black};
`;

export default function QuestionModal(P: any) {
  const { onClickUpdate, el, setQuestion, question, setClose } = P;

  const onClickClose = () => {
    setClose((prev: any) => !prev);
  };

  const onChangeQuestion = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };
  console.log(el);
  return (
    <>
      <BgLayer></BgLayer>
      <Modal>
        <Close onClick={onClickClose} />
        <H1>
          <EditOutlined /> 질문 수정
        </H1>
        <Textarea1
          onChange={onChangeQuestion}
          placeholder="수정하실 질문을 입력해주세요."
          value={question || el?.question}
        ></Textarea1>

        <SubmitBtn>
          <span onClick={onClickUpdate}>수정하기</span>
        </SubmitBtn>
      </Modal>
    </>
  );
}
