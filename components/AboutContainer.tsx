import {config, Text} from '@nextui-org/react';
import styled from 'styled-components';

const TextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.875rem;
    margin-bottom: 0.875rem;
`

const H3 = styled(Text)`
  margin: 2rem;
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 2.5rem;
  word-spacing: 0.2rem;
  @media ${config.media.xsMax} {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;
export default function AboutContainer(props:any) {
    return (
        <TextBox>
            <H3>
                DevKor Project : Team MIMI의 Test Page 입니다. <br />
                현재 When2meet의 사용성을 개선하기 위한 프로젝트를 진행하고 있는데 시간 선택을 가로 방향으로 할 지, 아니면 세로 방향으로 할 지 테스트 중에 있습니다. 
                테스트 후 간단한 피드백 남겨주시면 감사하겠습니다.
            </H3>
        </TextBox>

    )
}