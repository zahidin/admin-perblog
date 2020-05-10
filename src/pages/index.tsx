import Home from '@app/home';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import getPost from '@redux/post/action';
import { getDataPost, getIsLoading, getPostIsError } from '@redux/post/selector';
import LayoutHome from '@layouts/home';
import protectedPage from '@/middleware/protectedPage';

const mapStateToProps = (state: any) => ({
  post: getDataPost(state),
  isLoading: getIsLoading(state),
  isError: getPostIsError(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPostAction: () => getPost(),
    },
    dispatch
  );

function IndexPage(props) {
  return (
    <LayoutHome>
      <Home {...props} />
    </LayoutHome>
  );
}

// IndexPage.getInitialProps = async (ctx) => {

// };
const reduxConnect = connect(mapStateToProps, mapDispatchToProps)(IndexPage);
// export default reduxConnect;
export default protectedPage(reduxConnect);
