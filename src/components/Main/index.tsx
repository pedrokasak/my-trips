import * as S from './styles'



const Main = () => <main>
    <S.Wrapper>
        <S.Logo src='/img/logo.svg' alt='Imagem de um átomo e react avançado escrito ao lado' />
        <S.Title>React Avançado</S.Title>
        <S.Description>Typescript, ReactJs, NextJs e Styled Components</S.Description>
        <S.Illustration  src='/img/hero-illustration.svg' alt='Imagem de um computador comuma pessoa sentada em uma cadeira utilizando o computador'/>
    </S.Wrapper>
</main>

export default Main