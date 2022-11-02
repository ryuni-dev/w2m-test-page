import React, { useCallback, useEffect, useState } from "react";
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100%;
`
const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
    width: auto;
    height: auto;
    user-select: none;
`
const DivCol = styled.div`
    display: flex;
    flex-direction: column;
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
    background-color: ${(props:Props) => {
        if (props.current) {
            if (!props.removeMode) {
                return "#4af";
            }
            else {
                return  "#000000";
            }
        }
        else if (props.selected){
            return "#4af";
        }
        else {
            return  "#000000";
        }
    }};
    `

interface Props {
    selected: boolean;
    current: boolean;
    removeMode: boolean; 
}
    
interface Date {
    id: number;
    date: string;
    selected: boolean;
    disable: boolean;
}

interface Rect {
    start: string;
    end: string;
}



const CalcRect = (rect:Rect): number[] => {
    const startWeek: number = parseInt(rect.start[0]);
    const startTime: number = parseInt(rect.start.slice(1,3));
    const endWeek: number = parseInt(rect.end[0]);
    const endTime: number = parseInt(rect.end.slice(1,3));
    const rectItems: number[] = [];


    if (startWeek <= endWeek) {
        if (startTime <= endTime) {
            for(let i = startWeek; i <= endWeek; i++){
                for(let j = startTime; j <= endTime; j++){
                    const item: number = i * 100 + j;
                    rectItems.push(item);
                }
            }
        }
        else {
            for(let i = startWeek; i <= endWeek; i++){
                for(let j = endTime; j <= startTime; j++){
                    const item: number = i * 100 + j;
                    rectItems.push(item);
                }
            }
        }
    }
    else {
        if (startTime <= endTime) {
            for(let i = endWeek; i <= startWeek; i++){
                for(let j = startTime; j <= endTime; j++){
                    const item: number = i * 100 + j;
                    rectItems.push(item);
                }
            }
        }
        else {
            for(let i = endWeek; i <= startWeek; i++){
                for(let j = endTime; j <= startTime; j++){
                    const item: number = i * 100 + j;
                    rectItems.push(item);
                }
            }
        }
    }
    return rectItems;
}

const removeDate = (selectedList: number[], targetList: number[]) => {
    

}


const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function ScheduleSelector(){
    const [click, setClick] = useState<boolean>();
    const [selected, setSelected] = useState<number[]>([]);
    const [start, setStart] = useState<string>();
    // const [moveed, setMoveed] = useState<boolean>(false);
    const [end, setEnd] = useState<string>();
    const [removeMode, setRemoveMode] = useState<boolean>();
    const [curr, setCurr] = useState<number[]>([]);


    const list:number[] = [];
    for (let i = 0; i < 48; ++i) {
        list.push(i);
    }
    useEffect(() => {
        // console.log(selected)
    },[selected]);


    const TouchStartEvent = useCallback((
        e:React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
        ): void => {
        setClick(true);
        setStart(e.currentTarget.getAttribute("data-key"));
        selected.find(s => parseInt(start) === s) ? setRemoveMode(true) : setRemoveMode(false);
        setEnd(e.currentTarget.getAttribute("data-key"));
    },
    [click, start, end, removeMode, selected]);
    // | React.TouchEventHandler<HTMLDivElement>
    const TouchMoveEvent = useCallback((
        e:React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
        ): void => {
        (click) ? setEnd(e.currentTarget.getAttribute("data-key")) : null;
        click ? setCurr(CalcRect({start, end})): null;
    },
    [end, curr, click, start]);

    const TouchEndEvent = useCallback((
        e:React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
        ): void => {
        click ? 
        (!removeMode
            ? setSelected([...selected, ...curr]) 
            : setSelected(selected.filter(se => !curr.includes(se))))
        : null;

        setCurr([]);
        setClick(false);
        setRemoveMode(false);
    },
    [selected, curr, click, removeMode]);

    const FindCurrent = (weekIdx: number, timeIdx: number): boolean => {
        if(curr.find(c => c === ((weekIdx+1) * 100 + timeIdx))){
            return true;
        }
        else {
            return false;
        }
        // (curr.find(c => c === ((weekIdx+1) * 100 + timeIdx)) ? true : false)
    };

    const FindSelected = (weekIdx: number, timeIdx: number): boolean => {
        if (selected.find(s => s === ((weekIdx+1) * 100 + timeIdx))){
            return true;
        }
        else {
            return false;
        }
        // selected.find(s => s === ((weekIdx+1) * 100 + timeIdx)) ? true : false
    };

    return (
        <DivContainer>
            <DivCol>
                <DivData selected={false} current={false} removeMode={false}></DivData>
                {
                    list.map(i =>
                        <DivData key={(i * 30 * 100)} selected={false} current={false} removeMode={false}>{(i * 30) % 60 === 0 ? (i * 30)  / 60 + "시": ""}</DivData>
                        )
                    }
            </DivCol>
            {
                weekArr.map((week, weekIdx) => 
                    <DivCol key={weekIdx * 100000}>
                    <DivData key={weekIdx} selected={false} current={false} removeMode={false}>{week}</DivData>
                    {
                        list.map((timeIdx) => 
                            <DivData
                                key={(weekIdx+1) * 100 + timeIdx}
                                data-key={(weekIdx+1) * 100 + timeIdx}
                                selected={
                                    FindSelected(weekIdx, timeIdx)
                                    // selected.find(s => s === ((weekIdx+1) * 100 + timeIdx)) ? true : false
                                }
                                current={
                                    FindCurrent(weekIdx, timeIdx)
                                    // (curr.find(c => c === ((weekIdx+1) * 100 + timeIdx)) ? true : false)
                                }
                                removeMode={removeMode}
                                onMouseDown={TouchStartEvent
                                //     (e:React.MouseEvent<HTMLDivElement>)=> {
                                //     setClick(true);
                                //     setStart(e.currentTarget.getAttribute("data-key"));
                                //     selected.find(s => parseInt(start) === s) ? setRemoveMode(true) : setRemoveMode(false);
                                //     // console.log(removeMode);
                                //     // setMoveed(false);
                                //     setEnd(e.currentTarget.getAttribute("data-key"));
                                //     // setCurr([...curr, ...CalcRect({start, end})])
                                // }
                            }
                                onMouseMove={TouchMoveEvent
                                //     (e:React.MouseEvent<HTMLDivElement>)=>{
                                //     // console.log(removeMode);

                                //     // click ?
                                //     // (e.currentTarget.getAttribute("data-key") === end ? setMoveed(false) : setMoveed(true))
                                //     // : null;
                                //     // console.log('moveed: ',moveed);
                                //     (click) ? setEnd(e.currentTarget.getAttribute("data-key")) : null;
                                //     // (click && moveed) ?
                                //     // (selected.find(s => parseInt(end) === s) ? setRemoveMode(true) : setRemoveMode(false))
                                //     // : null;
                                //     // console.log(removeMode);
                                //     // selected.find(s => parseInt(end) === s) ? setRemoveMode(true) : setRemoveMode(false);
                                    
                                    
                                //     click ? setCurr(CalcRect({start, end}))
                                //     // (!removeMode
                                //     //     ? setCurr(CalcRect({start, end})) 
                                //     //     : setCurr(curr.filter(cur => !CalcRect({start,end}).includes(cur))))
                                //     : null;
                                //     // console.log(curr)
                                //     // click ? console.log(selected) : null;
                                // }
                            }
                                onMouseUp={TouchEndEvent
                                //     ()=> {
                                //     console.log(removeMode);
                                //     click ? 
                                //     (!removeMode
                                //         ? setSelected([...selected, ...curr]) 
                                //         : setSelected(selected.filter(se => !curr.includes(se))))
                                //     : null;
                                //     setCurr([]);
                                //     console.log(selected)
                                //     setClick(false);
                                //     setRemoveMode(false);
                                // }
                            }
                            onTouchStart={TouchStartEvent}
                            onTouchMove={TouchMoveEvent}
                            onTouchEnd={TouchEndEvent}
                            // onTouchEnd={(e:React.TouchEventHandler<HTMLDivElement>) => {
                                // body 스크롤 막음 [바디영역에서 스크롤있으면 터치 이벤트 안먹힙니다]
    			// BodyScrollDisAble();
                            // onTouchStart={(e) => {
                            //     e.currentTarget.getAttribute
                            // }}
                            // }}

                            >
                            </DivData>
                        )
                    }
                    </DivCol>
                )
            }
        </DivContainer>
    );
}