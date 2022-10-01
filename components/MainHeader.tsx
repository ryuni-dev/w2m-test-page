import { config, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
    margin-left: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.875rem;
    word-break: break-word;
`
const H1 = styled(Text)`
  margin: 0;
  font-size: 6rem;
  line-height: 7rem;
  @media ${config.media.xsMax} {
    font-size: 5.5rem;
    line-height: 6.5rem;
  }
  @media (max-width: 480px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`;
export default function MainHeader(){
    const { theme } = useTheme();
    return (
        <Header>
            <H1 h1 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
                <Link href="/">
                    <span>Team MiMi</span>
                </Link>
            </H1>
        </Header>
    )
}