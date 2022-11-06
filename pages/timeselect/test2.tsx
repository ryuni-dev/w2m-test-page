import styled from 'styled-components';

const TimePicker = styled.select`
    width: 160px;
    height: 48px;
    background: #FFFFFF;
    /* gray100 */
    color: #333333;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    /* identical to box height, or 20px */
    margin: 0px;
    letter-spacing: -0.011em;
    text-indent: 15px;

    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`

export default function Test2(){
    const list:number[] = [];
    for (let i = 0; i < 24; ++i) {
        list.push(i);
    }
    return (
        <TimePicker >
            {list.map(value => 
                <>
                    <option value={value + "시 00분" }>{value + "시 00분" }</option>
                    <option value={value + "시 30분"}>{value + "시 30분"}</option>
                </>
            )}
        </TimePicker>
    )
}