You can use the `fetch` function to fetch data for routes dynamically by creating a `get` middleware and passing data to `res.locals`.

The data that is passed to `res.locals` can then be accessed via the `props` field on the page component.

Here is an example of a route that fetches user data from the GitHub API and renders it in a page component.

```js
// routes/github/[username].js

export async function get(req, res, next) {
  const { username } = req.params;

  // fetch just works!
  const data = await fetch(`https://api.github.com/users/${username}`);
  if (data.status !== 404) {
    const user = await data.json();
    res.locals = { user };
  }

  next();
};

export default function Page(props) {
  const { user } = props;

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <img src={user.avatar_url} width={64} height={64} />
      <h1>{user.name}</h1>
      <p>{user.login}</p>
    </div>
  );
};
```

The `fetch` function is globaly available via [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) module.
