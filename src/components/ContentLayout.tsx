import Header from "./Header";

type Props = {
  children: JSX.Element;
}

export default function ContentLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}