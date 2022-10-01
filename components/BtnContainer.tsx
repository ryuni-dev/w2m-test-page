import { config, Button, Link } from '@nextui-org/react';
import styled from 'styled-components';
import AboutContainer from './AboutContainer';
//import Link from 'next/link';

const BtnBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`

const Btn = styled(Button)`
    margin: 1rem;
    background-color: #4169e1;
    @media ${config.media.xsMax} {
        margin-left: 0.7rem;
        margin-right: 0.7rem;
      }
      @media (max-width: 480px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
`

export default function BtnContainer() {
    return (
        <BtnBox>
            <Link href='/timeselect/horizon'>
            <Btn>가로 ver.</Btn>
            </Link>
            <Link href='/timeselect/vertical'>
            <Btn>세로 ver.</Btn>
            </Link>
        </BtnBox>
    )
}