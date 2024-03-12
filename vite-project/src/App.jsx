import { LearnConditionalRender } from "./components/LearnConditionalRender";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnExternalCss } from "./components/LearnExternalCss";
import { LearnExternalCss2 } from "./components/LearnExternalCss2";
import { LearnInlineCss } from "./components/LearnInlineCss";
import { LearnMap } from "./components/LearnMap";



function App() {

  let roll = 101;
  const getData = (data) => {

    console.log(data);
  }

  return (
    <>
      {/* <LearnCustomHook/> */}
      {/* <LearnConditionalRender/> */}
      {/* <LearnMap/> */}
      {/* <LearnInlineCss /> */}
      <LearnExternalCss />
      <LearnExternalCss2 />
    </>
  )
}

export default App
