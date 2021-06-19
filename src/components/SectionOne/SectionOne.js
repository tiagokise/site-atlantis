import React from 'react';
import * as S from './SectionOne.style';
import imgTiago from '../../images/tiago.jpg'
import imgJoice from '../../images/joice.jpg'
import imgLu from '../../images/lu.jpg'

export default function SectionOne(){

  const membersList = [
    {
      name: 'Tiago',
      image: imgTiago,
    },
    {
      name: 'Joice',
      image: imgJoice,
    },
    {
      name: 'Luciane',
      image: imgLu,
    },
  ]


  return(
   <S.SectionOne>
     <S.Header>
        <S.HeaderText>Design System</S.HeaderText>
        <S.Logo/>
     </S.Header>
     <S.SectionTwo>
      <S.Apresentation>
        <h1>Team Atlantis</h1>
        <S.LogoAtlantis/>
      </S.Apresentation>
      <S.Members>
        <S.MembersTitle>Tripulação</S.MembersTitle>
        { membersList.map((member) => 
          <S.Member>
            <img src={member.image} alt="imagem" />
            <h3>{member.name}</h3>
          </S.Member>
        )}
      </S.Members>
     </S.SectionTwo>
   </S.SectionOne>
  )
}