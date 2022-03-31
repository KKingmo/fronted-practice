export default function Child2Page(props) {
  return (
    <div>
      <div>자식2의 카운트: {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!</button>
    </div>
  );
}
