import * as React from "react"
import {
  Content,
  DateNow,
  LinkTitle,
  SearchBlock,
  StyledHeader,
  Text,
} from "./header.styled"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ setIsPopupOpen }) => {
  return (
    <StyledHeader>
      {/*<Container>*/}
      <Content>
        <LinkTitle to="/">Anime</LinkTitle>
        <SearchBlock onClick={() => setIsPopupOpen(true)}>
          <StaticImage src="../../images/gatsby-icon.png" alt="search-icon" />
          <Text>Search...</Text>
        </SearchBlock>
        <DateNow>
          Today is the&nbsp;
          {/*<DateToDay as="span">*/}
          {/*  {day}th of {month}*/}
          {/*</DateToDay>*/}
        </DateNow>
        {/*<MobileDate>{shortMonth + ` ${day}` + 'th'}</MobileDate>*/}
      </Content>
      {/*</Container>*/}
    </StyledHeader>
  )
}

export default Header
