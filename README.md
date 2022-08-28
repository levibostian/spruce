[npm]: https://www.npmjs.com/package/levibostian/spruce

Latest (recommended) [![npm latest version](https://img.shields.io/npm/v/levibostian/spruce/latest.svg)][npm]
Beta: [![npm beta version](https://img.shields.io/npm/v/levibostian/spruce/beta.svg)][npm]
Alpha: [![npm alpha version](https://img.shields.io/npm/v/levibostian/spruce/alpha.svg)][npm]

[![codecov](https://codecov.io/gh/levibostian/spruce/branch/main/graph/badge.svg?token=XXXXXXX)](https://codecov.io/gh/levibostian/spruce)

# spruce 

Easily run automations against your email inbox. 

# Goals of this project

- Infrequent (as much as we can) updates. We do this by being lightweight on dependencies and using dependencies that are stable. 
- Portable. Run on GitHub Actions, your own server via cron, Docker, etc. 
- Just as easy to setup as it is to create rules. Provide tools for users to be able to easily setup parsing rules for emails. 

This tool's current duties include:
- Get emails from an IMAP email address account. 
- Parse IMAP emails into a developer friendly format (example: JSON).
- Run custom code against the parsed email to do whatever you want with the email. 
- Perform an action on email after processing is complete (mark as read, move to folder, delete). 
- Provide developer tools for each of the steps above for easy development. Provide CLI to get a data set. Provide library to run automated tests on data set against your custom code. 

We try to keep this tool focused in it's vision and not be bloated with features. If you have a feature you have in mind to provide to this tool, it's recommended to [pitch the idea](https://github.com/levibostian/spruce/issues/new) to see if it fits into the vision of the project and would be accepted. 

# Work in progress 

This tool is a work in progress. 

# Development 

- `nvm use`
- `npm install`
- `cp .env.example .env` fill in details to hook into your IMAP server. 
- (optional) `npm install -g ts-node` to easily run typescript files: `ts-node app/dump.ts`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key))

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/levibostian"><img src="https://avatars1.githubusercontent.com/u/2041082?v=4" width="100px;" alt=""/><br /><sub><b>Levi Bostian</b></sub></a><br /><a href="https://github.com/levibostian/spruce/commits?author=levibostian" title="Code">💻</a> <a href="https://github.com/levibostian/spruce/commits?author=levibostian" title="Documentation">📖</a> <a href="#maintenance-levibostian" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
