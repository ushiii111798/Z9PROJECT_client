import Search from "antd/lib/transfer/search";
import InfiniteScroll from "react-infinite-scroller";
import ProductListPresenter from "./list.presenter";
import * as S from "./list.styles";

export default function ProductListMap(P: any) {
  const { onClickTab, tab, data, onLoadMore, onChangeSearch } = P;
  const btnArray = ["전체", "진행예정", "진행중", "종료"];
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.H1>리스트</S.H1>
          <S.SearchBox tab={tab}>
            <ul>
              {btnArray.map((el: any, i: number) => (
                <li id={String(i + 1)} onClick={onClickTab} key={i}>
                  {el}
                </li>
              ))}
            </ul>
            <Search
              placeholder="검색어를 입력해주세요."
              onChange={onChangeSearch}
            />
          </S.SearchBox>
          <S.Main>
            <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
              {data?.fetchProductsByPages.map((el: any) => (
                <ProductListPresenter key={el.id} el={el} />
              ))}
            </InfiniteScroll>
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}