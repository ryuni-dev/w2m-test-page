import { toNamespacedPath } from 'path';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';

interface IsSelect {
    bg: boolean;
}

const weekArr = [" ","MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// const dragEvent = () => {
//     document.addEventListener("mousemove");
// }

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
    user-select: none;
`

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    user-select: none;
`
const DivData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    padding: 0px;
    margin: 0px;
    width: 2.5rem;
    height: 1.5rem;
    background-color: ${(props:IsSelect) => (props.bg ? "#4af" : "#000000")}
`
const Tr = styled.tr`
    border: 0.5px solid white;
    height: 1.5rem;
`
const Td = styled.td`
    width: 2.5rem;
    border: 0.5px solid white;
    background-color: ${(props:IsSelect) => (props.bg ? "#4af" : "#000000")}
`
const Div = styled.div`
    padding: 0px;
    margin: 0px;
    width: 2.5rem;
    height: 1.5rem;
    background-color: ${(props:IsSelect) => (props.bg ? "#4af" : "#000000")}
`
const clickHandler = (event) => {
    console.log(event.target.classList.value);
    event.target.classList.value.includes("selected")
    ? event.target.classList.add("selected")
    : event.target.classList.removed("selected")

}
export default function TableComponent() {
    const ref = useRef();
    let temp:number = 1;
    const list:number[] = [];
    const se:boolean[] = [false, ];
    //const [state, dispatch] = useReducer();
    for (let i = 0; i < 48; ++i) {
        list.push(i);
    }
    const [selected, setSelected ] = useState<boolean>(false);
    const [val, setVal] = useState<string[]>([]);
    useEffect(() => {
        console.log(val)
    },[val]);

    return (
        <>
        <DivContainer>
            <DivRow>
            <DivData bg={false}></DivData>
                {weekArr.map((week, index) =>
                    <DivData bg={false}>{week}</DivData>)}
            </DivRow>
                {
                    list.map(i =>
                        <DivRow>
                        <DivData bg={false}>{(i * 30) % 60 === 0 ? (i * 30)  / 60 + "시": ""}</DivData>
                        {weekArr.map((week, index) =>     
                        <DivData onMouseMove={()=>{ 
                            selected ? console.log(week + i) : console.log("selected", selected)

                        }
                    }
                        onMouseDown={(e:React.MouseEvent<HTMLDivElement>)=> {
                            temp = parseInt(e.currentTarget.getAttribute("data-key"));
                            se[temp] = true;
                            setSelected(true);
                            console.log("se",se[temp])
                            //e.currentTarget.classList.add("selected");
                            //console.log(e.currentTarget.className);
                            console.log("key: ",e.currentTarget.getAttribute("data-key"))
                        }}
                        onMouseUp={(e)=> {
                            temp = parseInt(e.currentTarget.getAttribute("data-key"));
                            se[temp] = false;
                            console.log("index: ", temp, "se: ", se[temp]);
                            setSelected(false)
                        }}
                        bg={se[temp]}
                        key={temp}
                        data-key={temp++}
                        ></DivData>
                        )}
                        </DivRow>
                    )
                }
        </DivContainer>
        <style jsx>
        {`
        .selected {
            bgcolor: #4af;
        }
        .unselected {
            bgcolor: #000000;
        }
        `}
        </style>
        </>
    );
}