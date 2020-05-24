import protectedPage from '@/middleware/protectedPage';
import NewStory from '@app/newStory';
import { addPost } from '@redux/post/action';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      requestAddPost: (data: object) => addPost(data),
    },
    dispatch
  );

function NewStoryPage(props) {
  return <NewStory {...props} />;
}

const middlewarePage = protectedPage(NewStoryPage);
export default connect(mapStateToProps, mapDispatchToProps)(middlewarePage);
