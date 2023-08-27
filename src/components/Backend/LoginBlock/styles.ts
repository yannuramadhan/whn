// styles.ts

import styled from "styled-components";

export const BodyContainer=styled.div` margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: hsl(200, 12%, 80%);
/* Pastel background color */
min-height: 100vh;
`;

export const LoginForm=styled.div` background-color: #ffffff;
/* White background for form */
padding: 24px;
border-radius: 8px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
width: 100%;
max-width: 400px;
`;

export const LoginTitle=styled.h1` font-size: 24px;
font-weight: bold;
margin-bottom: 16px;
text-align: center;
`;