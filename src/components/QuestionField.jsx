import { findByLabelText } from "@testing-library/react";
import React, { useState } from "react";

function QuestionField() {

    const [result, setResult] = useState(' ')

    const calcRes = () => {
        let a = Math.round(Math.random() * 10)
        console.log(a)
        if(a % 2 === 0) {
            setResult('Даааааа')
        } else {
            setResult('Неееееет')
        }
    }

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        field: {
            color: '#fff',
            width: '40vw',
            height: '5vh',
            borderColor: '#fff',
            borderRadius: '7px',
            backgroundColor: 'transparent',
            fontSize: '4vh',
            textAlign: 'center'
        },
        btn: {
            backgroundColor: 'transparent',
            color: '#fff',
            margin: '3vh',
            borderColor: '#fff',
            borderRadius: '7px'
        },
        res: {
            color: '#fff'
        },
        containerSec: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        mainText: {
            color: '#fff',
            textAlign: 'center'
        },
        ball: {
            fontSize: '20vh'
        }
    }

    return(
        <div style={style.containerSec}>
            <h1 style={style.mainText}>Ответчик на величайшие вопросы мира</h1>
            <h1 style={style.ball}>&#128302;</h1>
            <h2 id="res" style={style.res}>{result}</h2>
            <div style={style.container}>
                <input style={style.field}></input>
                <button onClick={calcRes} style={style.btn}>Get answer</button>
            </div>
        </div>
    )

}

export default QuestionField