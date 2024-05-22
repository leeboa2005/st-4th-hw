import React from 'react';
import styled from 'styled-components';

// TODO: props로 받은 $active 에 따라 배경색이 blue 또는 gray가 되도록 해보세요.
const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => (props.$active ? 'blue' : 'darkgray')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: 20px;
`;
// Box 를 클릭하면 해당 Box만 파란색이 되도록 해야 합니다. components/ 안의 컴포넌트들안에서 TODO를 확인하세요.
function Box({ active, onClick }) {
    return <StyledBox $active={active} onClick={onClick} />;
}

export default Box;
