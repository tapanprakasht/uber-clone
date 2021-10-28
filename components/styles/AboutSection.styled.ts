import styled from "styled-components";
import { Container } from "./Utils";

export const StyledAboutSection = styled.section`
    display: flex;
    margin-top: 100px
`
export const FlexRowContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const FlexItem = styled.div`
    img {
        width: 30px;
    }
    h3 {
        padding: 20px 0;
    }
    p {
        line-height: 24px
    }
`