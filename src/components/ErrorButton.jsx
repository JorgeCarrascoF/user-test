const ErrorButton = () => {
  const handleClick = () => {
    throw new Error("Test error from ErrorButton");
  };

  return <button style={{border: "1px solid black"}} onClick={handleClick}>Oops! This is an error Button</button>;
};

export default ErrorButton;
