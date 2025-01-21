type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  color: string;
};

function Button({ backgroundColor, fontSize, color }: ButtonProps) {
  const styles = {
    backgroundColor: backgroundColor || "blue",
    fontSize: fontSize || "16px",
    color: color,
  };
  return (
    <div>
      <button style={styles}>Hello World</button>
    </div>
  );
}

export default Button;
