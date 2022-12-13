import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  // console.log(diaryList)
  const diaryList = useContext(DiaryStateContext)

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
// undefined 으로 넘어 오는 값의 기본값을 설정
DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
