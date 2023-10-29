type ButtonPropsType = {
  name: string;
  clickHandler: () => void;
  disabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
  const { name, clickHandler, disabled } = props;

  return (
    <button className="btnStyle" onClick={clickHandler} disabled={disabled}>
      {name}
    </button>
  );
};
