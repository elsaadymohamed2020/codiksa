# Contributing to Codiksa

First off, thank you for considering contributing to Codiksa! 

## Branching Strategy
We use a structured branching strategy to maintain stability:
- `main`: Production-ready code only.
- `develop`: Pre-production. All feature branches merge here first.
- `feature/xxx`: New features or major changes. (e.g., `feature/services-page`)
- `fix/xxx`: Bug fixes. (e.g., `fix/navbar-mobile-glitch`)
- `chore/xxx`: Tooling, tests, or documentation updates.

## Commit Message Format (Conventional Commits)
Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools and libraries such as documentation generation

**Example:**
`feat(contact): add honeypot field to combat spam`

## Pull Request Review Expectations
1. Ensure your branch is synced with `develop`.
2. All PRs must follow the provided PR template.
3. Tests must pass locally before opening the PR.
4. If your change affects the UI, please include before/after screenshots.
5. A minimum of 1 approval from a core maintainer is required to merge.
