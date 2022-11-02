import { useState } from "react";
import ScheduleSelector from 'react-schedule-selector'
import styled from "styled-components";

const SS = styled(ScheduleSelector)`
    width: 50%;
    height: 50%;
`
export default function RSS(){
    const [state, setState] = useState();
    const handleChange = (newSchedule) => {
        setState(newSchedule)
    }

    return (
        <SS
        selection={state}
        numDays={5}
        minTime={8}
        selectionScheme={'square'}
        maxTime={22}
        hourlyChunks={2}
        onChange={handleChange}
      />
    );
}