// Ref 사용을 위한 import
import { Component, createRef } from "react";
// class형에서는 use를 사용할 수 없기 대문에 Router를 통째로 import 한다.
import Router from "next/router";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 99,
  };

  // 처음 화면에 렌더링하고나서 실행하는 부분 (한번만 실행)
  componentDidMount() {
    console.log("마운트 됌!!!");
    this.inputRef.current?.focus();
    // 화면에 그림이 그려지고 나서 자동으로 포커스가 깜빡깜빡 거릴 때
  }

  // 리렌더링 할 때 마다 실행
  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!");
  }

  // 컴포넌트가 사라질 때마다 실행
  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기
    // api 요청!!! 채팅방나가기 버튼을 누르지않고 나가더라도 api요철 한다.
  }

  onClickCounter = () => {
    console.log("this");
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
