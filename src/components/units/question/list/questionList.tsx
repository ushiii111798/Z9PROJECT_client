import { CaretDownOutlined, MessageOutlined } from "@ant-design/icons";
import * as S from "../question.styles";

export default function QuestionList() {
  return (
    <>
      <S.User>
        <img src="/img_user.jpeg" alt="유저 이미지" />
        <S.UserInfo>
          김빵빵<span>2022.11.03</span>
        </S.UserInfo>
      </S.User>
      <S.Contents>
        질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문
      </S.Contents>
      <S.Answer>
        <p>
          <MessageOutlined /> {``} 답글 <CaretDownOutlined />
        </p>
        <p>수정</p>
        <p>삭제</p>
      </S.Answer>
    </>
  );
}
