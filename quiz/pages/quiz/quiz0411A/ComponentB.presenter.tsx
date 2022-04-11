// presenter 부분
export default function ComponentBPresenter(props) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
