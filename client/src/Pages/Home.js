import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_POST_QUERY } from '../util/graphql'
import { Grid, Transition } from "semantic-ui-react";
import PostCard from '../Components/PostCard'
import { AuthContext } from '../context/auth'
import PostForm from '../Components/PostForm'

function Home() {
  const { user } = useContext(AuthContext)
  const { loading, data: { getPosts: posts } } = useQuery(FETCH_POST_QUERY);

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading Post...</h1>
        ) : (
          <Transition.Group>
            {posts && posts.map(post => (
              <Grid.Column key={post.id} style={{ marginButtom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
