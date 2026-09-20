# Contributing to InfogennieAI

InfogennieAI is a **proprietary portfolio project** by Lavesh Paryani (see [LICENSE](../LICENSE)).
The source is public for evaluation and reference, but it is **not open for redistribution or
external code contributions**, and reuse requires prior written permission.

That said, feedback is welcome:

## Reporting bugs or suggestions

- Open an issue using the **Bug report** or **Feature request** template.
- Include clear steps to reproduce, what you expected, and screenshots or console output where relevant.
- For security issues, follow [SECURITY.md](SECURITY.md) and report privately instead of opening a public issue.

## Running the project locally (for evaluation)

InfogennieAI is a React single-page app. Graph generation runs entirely in the browser, so no
backend is required to try it.

```bash
# from the repository root
npm install
npm start          # opens http://localhost:3000
```

The `backend/` folder contains an optional Django REST API kept as a reference implementation; the
deployed app does not depend on it.

## A note on pull requests

Because this is a proprietary project, unsolicited pull requests generally will not be merged. If you
have spotted a bug and want to propose a fix, please open an issue first to discuss it.
