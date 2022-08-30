[npm]: https://www.npmjs.com/package/spruce-email

Latest (recommended) [![npm latest version](https://img.shields.io/npm/v/spruce-email/latest.svg)][npm]
Beta: [![npm beta version](https://img.shields.io/npm/v/spruce-email/beta.svg)][npm]
Alpha: [![npm alpha version](https://img.shields.io/npm/v/spruce-email/alpha.svg)][npm]

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

- [X] Dump parsed emails from inbox. 
- [ ] Filter emails. 
- [ ] Execute custom code from parsed email. 
- [ ] Create tooling to test filters and custom code works. 

# Getting started 

> Note: These docs are incomplete. It's planned to be expanded as the project progresses. 

There is a recommended path to using this tool: 

[![](https://mermaid.ink/img/pako:eNo1j0sKAjEQRK_S9FovMAvB3wkUXJhZtJOeMZB0hk4HFPHuRhl3VfAeVL1wyJ6xw0lpvsP54GR73SuTMRRKc2TwZASFDUbNCZ65KgS55UcP6_UGdteLhgaPIRprActLBE4UYvkKMJAy0C1X653sft5-8eZYpyBfTasATRSk2OI22AmuMLG27tvKlxMAh3bnxA67Fj2PVKM5dPJuaJ3bXD76YFmxGykWXiFVy6enDNiZVv5Dh0DtdFqo9wdY7l0l)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNo1j0sKAjEQRK_S9FovMAvB3wkUXJhZtJOeMZB0hk4HFPHuRhl3VfAeVL1wyJ6xw0lpvsP54GR73SuTMRRKc2TwZASFDUbNCZ65KgS55UcP6_UGdteLhgaPIRprActLBE4UYvkKMJAy0C1X653sft5-8eZYpyBfTasATRSk2OI22AmuMLG27tvKlxMAh3bnxA67Fj2PVKM5dPJuaJ3bXD76YFmxGykWXiFVy6enDNiZVv5Dh0DtdFqo9wdY7l0l)

First, create yourself a sample data set. That is, save some example emails to a file that you can use to configure this tool and for automated tests if you choose to do that. 

...more docs coming soon...

# Development 

- `nvm use`
- `npm install`
- `cp .env.example .env` fill in details to hook into your IMAP server. 
- (optional) `npm install -g ts-node` to easily run typescript files: `ts-node index.ts dump --debug --output="/tmp/foo"`

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
