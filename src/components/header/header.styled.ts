import styled from 'styled-components';
import Breakpoints from '../../constans/breakpoints';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

export const LinkTitle = styled(Link)`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: var(--black);
  cursor: pointer;
  text-decoration: none;
`;

export const SearchBlock = styled.div`
  max-width: 362px;
  width: 100%;
  padding: 9px 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--gray);
  border-radius: 30px;
  cursor: pointer;
  margin: 0 15px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--gray-2);
  margin-left: 6px;
`;

export const DateNow = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--gray-4);

  @media (max-width: ${Breakpoints.sm}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;
export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
`;

export const StyledIconSearch = styled(StaticImage)`
  width: 17px;
  height: 17px;
`;
export const DateToDay = styled(DateNow)`
  text-decoration: underline;
`;
export const MobileDate = styled(DateNow)`
  display: none;
  white-space: nowrap;

  @media (max-width: ${Breakpoints.sm}) {
    display: block;
  }
`;
