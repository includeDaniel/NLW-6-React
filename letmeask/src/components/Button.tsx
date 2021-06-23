type ButtonProps = {
  children?: string;
};

export function Button(props: ButtonProps) {
  return <button>{props.children || "Default"}</button>;
}
