const head = (
    <div style={{
                height: "50px",
                width: "50px",
                border: "12px solid black",
                borderRadius: "100%",
                position: "absolute",
                top: "50px",
                right: "-30px"
        }}
    />
)

const body = (
    <div style={{
                height: "100px",
                width: "12px",
                background: "black",
                position: "absolute",
                top: "120px",
                right: "0px"
        }}
    />
)

const rightArm = (
    <div style={{
                height: "12px",
                width: "100px",
                background: "black",
                position: "absolute",
                top: "150px",
                right: "-100px",
                rotate: "-30deg",
                transformOrigin: "left bottom"
        }}
    />
)
const leftArm = (
    <div style={{
                height: "12px",
                width: "100px",
                background: "black",
                position: "absolute",
                top: "150px",
                right: "12px",
                rotate: "30deg",
                transformOrigin: "right bottom"
        }}
    />
)

const rightLeg = (
    <div style={{
                height: "12px",
                width: "100px",
                background: "black",
                position: "absolute",
                top: "210px",
                right: "-88px",
                rotate: "60deg",
                transformOrigin: "left bottom"
        }}
    />
)
const leftLeg = (
    <div style={{
                height: "12px",
                width: "100px",
                background: "black",
                position: "absolute",
                top: "210px",
                right: "0px",
                rotate: "-60deg",
                transformOrigin: "right bottom"
        }}
    />
)

const BODY_PARTS = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps){
    return <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
            style={{
                height: "52px",
                width: "12px",
                background: "black",
                top: 0,
                right: 0,
                position: "absolute"
            }}
        />
        <div
            style={{
                height: "12px",
                width: "200px",
                background: "black",
                marginLeft: "119px"
            }}
        />
        <div
            style={{
                height: "410px",
                width: "12px",
                background: "black",
                marginLeft: "119px"
            }}
        />
        <div
            style={{
                height: "12px", 
                width: "250px", 
                background: "black"
            }}
        />
    </div>
}
