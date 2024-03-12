
export const LearnInlineCss = () => {
    const btnStyle = {
        color: "blue",
        backgroundColor: "orange"
    }

    return (
        <>
            <p style={{ "fontSize": "35px", "color": "red" }}>Hello React + Vite + Arboretum</p>
            <button style={btnStyle}>Button 1</button>
            <button style={{...btnStyle, ...{"fontSize": "35px", "color": "#fff", "display": "block"}}}>Button 1</button>
        </>
    )
}
