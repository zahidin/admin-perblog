import Navbar from '@components/navbar';
import { HomeProps } from '@/types/layouts/home';

function LayoutHome(props: HomeProps) {
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
