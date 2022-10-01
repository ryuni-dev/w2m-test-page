import React, { useEffect, useState } from 'react';
import Selecto from "react-selecto";
import styled from 'styled-components';

interface Props{
    isColumn: boolean;
}

const BoxContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: ${(props:Props) => props.isColumn ? "row" : "column"};
    widht: 100%
    height: 100%;
    justify-content: center;

`
const EnterBox = styled.div`
    display: flex;
    flex-basis: 100%;
    height: 0px;
`
const SpaceBox = styled.div`
    display:flex;
    width: 40px;
`
const WeekText = styled.span`
margin-right: 5px;
`
const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function Box (props) {
const list:number[] = [];
    for (let i = 0; i < 48; ++i) {
        list.push(i);
    }
const [val, setVal] = useState<string[]>([]);
useEffect(() => {
    console.log(val)
},[val]);

return (
    <>
    <Selecto
        dragContainer={".container"}
        selectableTargets={[".list"]}
        hitRate={0}
        selectByClick={true}
        selectFromInside={true}
        continueSelect={true}
        continueSelectWithoutDeselect={false}
        toggleContinueSelect={"shift"}
        toggleContinueSelectWithoutDeselect={[["ctrl"], ["meta"]]}
        ratio={0}
        onSelect={e => {
            e.added.forEach(target => {
                target.classList.add("selected");
                setVal(prev => [...prev, target.getAttribute("data-time")])
            });
            e.removed.forEach(el => {
                el.classList.remove("selected");
                setVal([])
            });
        }}
        ></Selecto>
        <BoxContainer isColumn={props.isColumn}>
            {
                weekArr.map((week, index) => 
                <>
                <div className="container">
                    <WeekText key={index}>{week}</WeekText>
                        {list.map(i => 
                            <>
                            <div className="list" key={i} data-time={i}></div>
                            {!props.isColumn && i=== 23 && <><EnterBox></EnterBox> <SpaceBox></SpaceBox></>}
                            </>
                        )} 
                        
                </div>
                </>

                )
            }
        </BoxContainer>
        <style jsx>
            {`
            .container {
                padding: 1px;
                margin: 0.3rem;
                display: flex;
                flex-direction: ${props.isColumn ? "column" : "row"};
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            .list {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid white;
                width: ${props.isColumn ? "1.2rem" : "0.7rem"};
                height: ${props.isColumn ? "0.5rem" : "1.4rem"};
                margin: 1px;
                font-weight: bold;
            }
            .selected {
                background: #4af;
            }
            `}
        </style>
    </>
)
}