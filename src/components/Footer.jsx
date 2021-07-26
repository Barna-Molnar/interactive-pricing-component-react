import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  height: calc(100% / 3);
  display: flex;

  justify-content: space-between;
  padding: 2.5rem 0 0rem 1.5rem;

  ul li {
    color: var(--grayish-blue-text);
    padding-left: 1rem;
  }
  li:not(:last-child) {
    margin-bottom: 0.7rem;
  }
  li::marker {
    content: url(${(props) => props.checkImg});
  }
  .cta {
    padding: 1rem 3.5rem;
    font-size: 10px;
    align-self: center;
    outline: none;
    border: none;
    border-radius: 17px;
    background-color: var(--dark-blue);
    color: var(--pale-blue-text);
  }
`;

export default function Footer({ checkImg }) {
  return (
    <FooterStyles checkImg={checkImg}>
      <ul>
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <button className="cta">Start my trial</button>
    </FooterStyles>
  );
}
