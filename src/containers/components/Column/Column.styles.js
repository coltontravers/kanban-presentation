import React from "react";
import styled from "styled-components";

/* eslint-disable */
export const ColumnWrapper = styled.div`
    background: whitesmoke;
    box-shadow: 0px 0px 0px 1px silver, 0px 0px 5px 0px #dedede;
    max-width: 25vw;
    min-width: 150px;
    flex: 1;
    margin: 0 15px;
`;

export const ColumnHeader = styled.div`
    padding: 1em;
    background: linear-gradient(
            to bottom,
            #245edb 0%,
            #3f8cf3 9%,
            #245edb 18%,
            #245edb 92%,
            #333 100%
        )
        center/cover no-repeat;
    color: white;
`;
