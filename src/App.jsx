import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const list = () => alert();

  const [face, setFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickNull = () => {
    setNum(0);
    setFace(null);
  };

  const onClickSwichFace = () => {
    setFace(!face);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        face || setFace(true);
      } else {
        face && setFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickNull}>リセット</button>
      <p onClick={list}>表示</p>
      <p>{num}</p>
      <button onClick={onClickSwichFace}>表示／非表示ボタン</button>
      {face && <p>ああああああああ</p>}
    </>
  );
};

export default App;
