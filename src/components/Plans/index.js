import React from 'react'
import icon1 from '../../images/svg-2.svg'
import icon2 from '../../images/svg-1.svg'
import icon3 from '../../images/svg-5.svg'
import 
{ PlansContainer,
  PlansCard, 
  PlansH1,
  PlansH2,
  PlansIcon,
  PlansWrapper,
  PlansP  } from './plansElements';

const Plans = () => {
  return (
    <PlansContainer id="Plans">
      <PlansH1>Our Plans</PlansH1>
      <PlansWrapper>
        <PlansCard>
          <PlansIcon src={icon1}/>
          <PlansH2> $9.99 CAD/month </PlansH2>
          <PlansP>For you.</PlansP>
        </PlansCard>
        <PlansCard>
          <PlansIcon src={icon2}/>
          <PlansH2>$12.99 CAD/month  </PlansH2>
          <PlansP>For you and your family.</PlansP>
        </PlansCard>
        <PlansCard>
          <PlansIcon src={icon3}/>
          <PlansH2>$39.99 CAD/month </PlansH2>
          <PlansP>For everybody.</PlansP>
        </PlansCard>
      </PlansWrapper>
    </PlansContainer>
  )
}

export default Plans
