import styled from "styled-components";

const stylesButton = (variant) => {
  switch (variant) {
    case "outlined":
      return {
        border: "1px solid #1F6ED4",

        "&:hover": {
          border: "border: 3px solid #4C94F0",
        },
        "&:active": {
          background: "#0052BC",
        },
        "&:disabled": {
          border: "1px solid #C9C9C9",
          background: "#C9C9C9",
        },
      };
  }
  switch (variant) {
    case "contained":
      return {
        background: " #1F6ED4",
        fontSize: "21px",

        "&:hover": {
          background: "#4C94F0",
        },
        "&:active": {
          background: "#0052BC",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
  }
  switch (variant) {
    case "warning":
      return {
        background: "#F37705",

        fontWeight: "800",

        "&:hover": {
          background: "#FF912B",
        },
        "&:active": {
          background: "#CF6300",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
  }

  switch (variant) {
    case "danger":
      return {
        background: "#DF2D2D",
        fontSize: "21px",

        "&:hover": {
          background: "#E54343",
        },
        "&:active": {
          background: "#C20B0B",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
  }
};

export const MyButton = ({
  variant = "contained",
  disabled,
  type = "button",
  children,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  ${({ variant }) => stylesButton(variant)}
`;
