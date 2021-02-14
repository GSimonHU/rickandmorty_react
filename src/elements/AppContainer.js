import styled from "styled-components";

const AppContainer = styled.div`
    padding: 0% 5%;
    background-color: ${(props) => props.currentTheme.backgroundColor};
    color: ${(props) => props.currentTheme.color};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 100%;
`;

export default AppContainer;
