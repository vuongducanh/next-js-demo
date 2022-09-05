import { memo } from 'react';

const PostDetail = memo((props: any) => {
  const { post } = props;

    return (
        <div className='PostDetail-test'>
            {post?.name}
        </div>
    );
});

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://610b520052d56400176b0202.mockapi.io/api/production')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) => ({
      params: { detail: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }: any) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://610b520052d56400176b0202.mockapi.io/api/production/${params.detail}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
  }

PostDetail.displayName = 'PostDetail';

export default PostDetail;