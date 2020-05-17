import Home from '@app/home';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import getPost from '@redux/post/action';
import requestLoggedIn from '@redux/auth/action';
import { getDataPost, getIsLoading, getPostIsError } from '@redux/post/selector';
import {
  getAuthIsError,
  getDataAuth,
  getAuthIsLoading,
  getAuthErrorMessage,
} from '@redux/auth/selector';
import LayoutHome from '@layouts/home';
import protectedPage from '@/middleware/protectedPage';

const mapStateToProps = (state: any) => ({
  post: getDataPost(state),
  isLoading: getIsLoading(state),
  isError: getPostIsError(state),
  auth: getDataAuth(state),
  authIsLoading: getAuthIsLoading(state),
  authIsError: getAuthIsError(state),
  authErrorMessage: getAuthErrorMessage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPostAction: () => getPost(),
      requestLoggedIn: (data: object) => requestLoggedIn(data),
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
//   return {};
// };

const middlewarePage = protectedPage(IndexPage);

export default connect(mapStateToProps, mapDispatchToProps)(middlewarePage);
