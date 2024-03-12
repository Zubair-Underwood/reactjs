import { LearnConditionalRender } from "./components/LearnConditionalRender";
import { LearnCustomHook } from "./components/LearnCustomHook";



function App() {

  let roll = 101;
  const getData = (data) => {

    console.log(data);
  }

  return (
    <>
     {/* <LearnCustomHook/> */}
     <LearnConditionalRender/>
    </>
  )
}

export default App
