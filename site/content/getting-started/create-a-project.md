Create a new Islandy project by running the Islandy project creation tool. This scaffolds out the various files and folders a Islandy project needs.

New Islandy projects can be created by using the Islandy project creation tool. It
will scaffold out a new project to get you started.

To create a new project, run:

```
$ mkdir my-islandy-app && cd my-islandy-app
$ npm create islandy@latest
```

This will scaffold out the new project containing some files and directories. There are
files and folders that are strictly necessary to run a Islandy project:

- **`package.json`**: It declares the dependencies and registers the scripts to run the project locally
  and in production.
- **`islandy.config.js`**: This file is a regular Node.js module, not a JSON file. It gets used by the
  Islandy server and build phases, and it's not included in the browser build.
- **`manifest.islandy.js`**: This is the manifest file that contains information about
  your routes and islands. This file is automatically generated in development
  based on your `routes/` and `islands/` folders. *DO NOT EDIT THIS FILE!*

Two important folders are also created that contain your routes and islands
respectively:

- **`routes/`**: This folder contains all of the routes in your project. The
  names of each file in this folder correspond to the path where that page will
  be accessed. Code inside of this folder is never directly shipped to the
  client.
- **`islands/`**: This folder contains all of the interactive islands in your
  project. The name of each file corresponds to the name of the island defined
  in that file. Code inside of this folder can be run from both client and
  server.

Also a **`components/`** folder is created that contains the server components files.

Finally a **`public/`** folder is created that contains static files that are
automatically served "as is".
