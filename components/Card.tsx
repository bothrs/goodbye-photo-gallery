import styled from 'styled-components'

export function Card (){
    return <StContainer>
        <StName>test</StName>
    </StContainer>
}


const StContainer = styled.div`

background-color: red;
display: flex;
`

const StName = styled.p`
color:black`
