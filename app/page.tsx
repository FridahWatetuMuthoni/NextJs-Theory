// import Couter from "./components/Couter";
// import Post from "./components/Post";
import React from "react";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Comp from "./components/Comp";

export default function Home() {
  const styles = {
    backgroundColor: "green",
    fontSize: 30,
    color: "white",
  };

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e);
  // };

  return (
    <section>
      {/* <Couter /> */}
      {/* <Post /> */}
      <Button backgroundColor="red" fontSize={30} color="white" />
      <Button2
        styles={styles}
        // handleClick={handleClick}
      />
      <Comp>Text Content</Comp>
    </section>
  );
}
