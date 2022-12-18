import styled , { css } from "styled-components";
import { theme } from '../../Styles/Theme/Theme';

export const PageMainHeader = styled.div`
    ${(props) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width: 767px){
            flex-wrap: wrap;
        }
    `}
`;

export const MainHeaderTitle = styled.h1`
        ${(props) => css`
            font-size: ${theme.typography.size_20};
            color: ${theme.typography.color_1};
            font-weight: ${theme.typography.weight.regular};
            margin: 0;
            padding: 0;

            @media screen and (max-width: 767px){
                font-size: ${theme.typography.size_18};
            }
        `}
`;