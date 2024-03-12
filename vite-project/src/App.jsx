
import { LearnCSSModule1 } from "./components/LearnCSSModule1";
import { LearnConditionalRender } from "./components/LearnConditionalRender";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnExternalCss } from "./components/LearnExternalCss";
import { LearnExternalCss2 } from "./components/LearnExternalCss2";
import { LearnForm } from "./components/LearnForm";
import { LearnInlineCss } from "./components/LearnInlineCss";
import { LearnMap } from "./components/LearnMap";
import { LearnUseOfImage } from "./components/LearnUseOfImage";



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
      {/* <LearnExternalCss /> */}
      {/* <LearnExternalCss2 /> */}
      {/* <LearnCSSModule1/> */}
      {/* <LearnCSSModule2/> */}
      {/* <LearnUseOfImage /> */}
      <LearnForm />
    </>
  )
}

export default App
