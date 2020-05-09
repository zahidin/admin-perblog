import Navbar from '@components/navbar';

function LayoutHome(props) {
  return (
    <div>
      <Navbar />
      <div className="my-3 py-3 is-hidden-mobile">
        <div className="container px-3">{props.children}</div>
      </div>
    </div>
  );
}

export default LayoutHome;
