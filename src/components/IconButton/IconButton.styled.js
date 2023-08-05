import styled from 'styled-components';



const btnSize = {
    sm: 24,
    md: 36,
    lg: 48
}

const getSize = props => '${btnSize[props.size]}px';
    
    
//     switch(props.size) 
//     {case 'sm':
// return btnSize[props.size];
// case 'md':
//     return '36px';
// case 'lg':
//     return '48px';
// default:
//     return '24px'



export const button = styled.button`
margin:0;
padding:8;
border-radius:4px;
cursor: pointer;
border:none;
width: ${getSize};
height: ${getSize};
color: ${props => (props.variant === 'primary' ? 'red' : 'blue')};


svg {
    width: 100%;
    height: 100%;
}
`;


