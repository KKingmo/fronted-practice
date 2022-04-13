export default function Quiz0413Page() {
  const onClickButton = (id) => (event) => {
    console.log(id);
  };

  return (
    <div>
      <button onClick={onClickButton(123)}>버튼</button>
    </div>
  );
}
