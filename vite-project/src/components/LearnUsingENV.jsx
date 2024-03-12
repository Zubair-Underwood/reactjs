

export const LearnUsingENV = () => {
  return (
    <>
    <h1>How to use env in React + Vite</h1>
    {import.meta.env.BASE_API_URL}
    <br/>
    {import.meta.env.API_KEY}
    </>
  )
}
