# Iso Core
Iso Core is a isomorphic react app initilizer. Provides webpack, babel, and jest configurations.

## Usage
`npm install -g @alexghenderson/iso-core`
`core-setup`

### Options
`--with-emotion` - Initialize project with emotion styling support

## Features
- Easy to use
  - Just one command to create a project
- Sane defaults
  - Provides server & client side webpack with sane defaults, including an alias to your src directory
  - Babel & Jest support is also set up with sane defaults
- Isomorphic-first projects
  - Isomorphic works out of the box. All pages should be SSR with zero or minimal effort
  - Easy to set up SSR data fetching - the SSR middleware is fully accessible and configurable
- Extendable
  - All configuration files are configurable. All code is exposed in projects, ready for changes.

## Important!
This project is very new. There will probably be bugs and breaking changes. It's not intended for production use - use at your own risk.