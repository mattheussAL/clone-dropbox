import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media(min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quartenary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  color: var(--color-blue);
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  max-width: 400px;
  margin: 0 auto;

  > .titulo {
    font-size: 25px;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;
    margin-top: 18px;
  }

  > button {
    margin: 18px;
    padding: 13px 18px;
    font-size: 16px;
    background: var(--color-blue);
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;
    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    font-size: 12px;
    opacity: .6;
    margin-top: 4px;
  }
`;
