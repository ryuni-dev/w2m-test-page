import { config, Button, Link } from '@nextui-org/react';
import styled from 'styled-components';
import AboutContainer from './AboutContainer';
//import Link from 'next/link';

const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`

const Btn = styled(Button)`
    margin-left: 5rem;
    margin-right: 5rem;
    @media ${config.media.xsMax} {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      }
      @media (max-width: 480px) {
        margin-left: 1rem;
        margin-right: 1rem;
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