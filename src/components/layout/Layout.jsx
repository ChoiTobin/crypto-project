import { Header } from './Header';
import './Layout.css';
export const Layout = (props) => {
  return (
    <>
      <body>
        <Header />
        <div className="Layout_Body">{props.children}</div>
      </body>
    </>
  );
};
