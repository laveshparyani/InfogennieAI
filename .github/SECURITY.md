# Security Policy

## Supported versions

This is a proprietary portfolio project. Only the latest version on the `main` branch is maintained.

| Version | Supported |
|---------|:---------:|
| Latest (`main`) | Yes |
| Older commits | No |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Instead, use GitHub's private reporting:

1. Go to the [Security tab](https://github.com/laveshparyani/InfogennieAI/security).
2. Click **Report a vulnerability**.
3. Describe the issue, steps to reproduce, and potential impact.

You can expect an acknowledgement within a few days. Thank you for helping keep the project safe.

## Notes on this project

InfogennieAI is a React single-page application (deployed on Vercel) that parses and visualizes
user-supplied data files entirely in the browser. Uploaded files are processed client-side and are
not sent to any server. The repository also includes an optional Django REST backend as a reference
implementation; it ships with development-only settings and should be hardened (secret key, `DEBUG`,
`ALLOWED_HOSTS`, CORS) before any deployment.
