import styled from 'styled-components';


export const List = styled.ul `
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;


const getBorderColor = ({theme, level}) => {
    switch (level) {
        case "beginner":
            return props.theme.colors.success;
        case "intermediate":
            return props.theme.colors.warning;
        case "advanced":
            return props.theme.colors.error;
        default: 
            return props.theme.colors.black;
    }
}

export const ListItem = styled.li `
    border: 5px solid ${getBorderColor};
    border-radius: 4px;

    :hover {
        background-color: tomato;
    }
`;