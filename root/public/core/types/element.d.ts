declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }

  interface PropsType {
    children: JSX.Element;
    name: string;
  }
}
