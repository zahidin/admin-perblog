import Navbar from '@components/navbar';
import { HomeProps } from '@/types/layouts';

function LayoutHome(props: HomeProps) {
  return (
    <>
      <Navbar />
      <div className="my-3 py-3 is-hidden-mobile">
        <div className="container px-3">{props.children}</div>
      </div>
    </>
  );
}

export default LayoutHome;
