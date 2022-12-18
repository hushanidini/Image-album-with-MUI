import React from "react";
import {PageMainHeader} from './MainHeader.styled';

const MainHeader = (props) => {
    const { headerTitle } = props;
    return(
        <PageMainHeader>{headerTitle}</PageMainHeader>
    );
};

export default MainHeader;