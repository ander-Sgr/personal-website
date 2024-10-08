import styled from '@emotion/styled'

const colors = {
  red: '#FFA500',
  darkGray: '#333333'
}

export const ContainerDescription = styled.section`
    margin: 0 auto;
    color: ${(props) => props.theme.foreground};
`
export const ContainerAboutMe = styled.div`
    margin: 40px auto;
    padding: 20px;
    width: 60%;
    color: ${(props) => props.theme.foreground};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    line-height: 1.6;
`

export const Title = styled.h2`
    color: ${colors.red};
    font-size: 30px;
`
export const Skills = styled(Title)`
  font-size: 30px;
  text-align: center;
`
export const GridSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  text-align: center;
`
export const Item = styled.div`
 padding: 0.5rem;
 ${props => props.fullWidth && 'grid-column: span 2;'}
`
export const HeaderSkill = styled.h3`
  margin-bottom: 0.5rem;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
