import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // [stateの変数名, stateを呼び出す関数名]
  // stateを変更ー＞再レンダリング(再読み込み)
  // 親コンポーねんと更新ー＞再レンダリング(再読み込み)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 最初の一回だけ使いたい処理を書く;
  // (処理, 注目する値)
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // stateが更新されるので無限ループのエラーになる
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      {/* jsでのcssの書き方は値を文字列で書く */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};
export default App;
