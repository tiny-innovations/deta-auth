# Deta Auth
### by Sourfruit

<p align='center'>
    <img display="inline-block" src="https://img.shields.io/npm/v/deta-auth?style=for-the-badge" /> <img display="inline-block"  src="https://img.shields.io/bundlephobia/minzip/deta-auth?style=for-the-badge" /> <img display="inline-block" src="https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge" />

As of February 2023, Deta Space has no native way to provide Space apps with certain information, such as:

- Authentication state
- App's custom subdomain

Deta Auth by Sourfruit is a React Hook that pings a secure route, and in return provides you with either "true" or "false" in the `auth.session` object.

All it requires is the URL to a secure route. If a user is logged in, the route would return 200 and the `auth.session` object would return `true`. Consequently, if Deta Space returns 403, the `auth.session` object would return `false`.

By default, any route not defined in `public_routes` is secure and would be adequate for Deta Auth to ping.


## Installation 🏗
You can install Deta Auth using either NPM or Yarn. 
```shell
$ npm install deta-auth
```
```shell
$ yarn add deta-auth
```

Then, import it like this:
```js
import useAuthState from 'deta-auth'
```

## Setup 🛠

Define a secure API / page route for Deta Auth to ping:

```js
 const { auth, loading, error } = useAuthState("/api/example")
 ```

You cannot provide it with a complete URL,  just the path. NextJS's built-in "hello.js" example API route is perfect to ping for authentication, and can be renamed "secure.js" if you want.

## Usage 🔒
Following this example data structure:
Example data structure that Deta Auth returns:

```json
{
    "loading": false,
    "auth": {
        "session": true,
        "url": "example-1-abcdef.deta.app",
    },
    "error": null
}
```

You can access everything, and can be used in conjunction with ternary operators to control what users can see. 

```js
return (
    <div>
        {auth.session ? (
            <button>Edit</button>
        ) : ( 
            <button>Login</button> 
        )}
    </div>
)
```

or

```js
return (
    <div>
        {loading ? (
            <Loader />
        ) : ( 
            <div>Content</div> 
        )}
    </div>
)

