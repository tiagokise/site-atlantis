import styled from 'styled-components';
import logoEureka from '../../images/logoWhite.svg'
import logoAtlantis from '../../images/atlantis.png'

export const SectionOne = styled.div`
  font-family: Catamaran;

`;
export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color: #E47825;
  padding: 10px 30px;
  margin-bottom: 30px;
`
export const HeaderText = styled.div`
  font-family: Catamaran;
  font-size: 36px;
  font-weight: bold;
  color: white;
`
export const SectionTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`
export const Logo = styled.div`
  width: 400px;
  height: 100px;
  background-image: url(${logoEureka});
  background-repeat: no-repeat;
  background-size: contain;  
`
export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  h1{
    font-size: 50px;
    margin: 0;
  }
`

export const LogoAtlantis = styled.div`
  /* margin-bottom: 80px;  */
  width: 150px;
  height: 150px;
  background-image: url(${logoAtlantis});
  background-repeat: no-repeat;
  background-size: contain; 
`
export const Members = styled.div`
  position: relative;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 80px auto 0;
`
export const MembersTitle = styled.h2`
  position: absolute;
  top: -80px;
`
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  :last-child{
    margin-right: 0px;
  }
img{
    box-shadow: 2px 2px 2px #4f4f4f42;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h3{
    text-align: center;
  }
`