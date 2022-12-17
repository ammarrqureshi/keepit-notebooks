import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 15px 24px;
  color: var(--black);
  border: none;
  border-radius: 5px;
  display: inline-block;
  margin-right: 5p;
  cursor: pointer;

  @media (max-width: 400px){
    width: 100%;
    margin-top: 20px;

  }

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary-color);
      color: var(--white);
      &:hover {
        background-color: var(--primary-light);
        color: var(--white);
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--black);
      color: var(--white);

      &:hover {
        background-color: var(--grey);
        color: var(--white);
      }
    `}
`;

// const Button = (props) => {
//   return (
//     <button
//       type={props.type}
//       value={props.value}
//       onClick={props.onClick}
//       className={props.className + " button"}
//     >
//       {" "}
//       {props.value}
//     </button>
//   );
// };

export default Button;
