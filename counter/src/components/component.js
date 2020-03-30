import React from "react";
import styled from 'styled-components';

const Hello = styled.p `
    color: red;
    font-size: 3rem;
`

function Component() {
    return (
      <div className="App">
        <Hello>Hello, I'm component</Hello>
      </div>
    );
  }
  
export default Component;