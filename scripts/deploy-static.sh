#!/usr/bin/env bash
# Build static export → rsync into a separate hosting repo.
# Never wipe the deploy folder (that would delete its .git).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.local ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.local
  set +a
fi

if [[ -z "${STATIC_DEPLOY_DIR:-}" ]]; then
  echo "error: STATIC_DEPLOY_DIR is not set." >&2
  echo "Add it to .env.local (see .env.example)." >&2
  exit 1
fi

DEPLOY_DIR="$STATIC_DEPLOY_DIR"
if [[ "$DEPLOY_DIR" != /* ]]; then
  DEPLOY_DIR="$ROOT/$DEPLOY_DIR"
fi

if [[ ! -d "$DEPLOY_DIR" ]]; then
  echo "error: deploy directory does not exist: $DEPLOY_DIR" >&2
  echo "Create it and run git init (or clone the Hostinger repo) first." >&2
  echo "Do not point STATIC_DEPLOY_DIR at out/ — out/ is a throwaway build." >&2
  exit 1
fi

if [[ ! -d "$DEPLOY_DIR/.git" ]]; then
  echo "warning: no .git in $DEPLOY_DIR — commit/push will not work until you init or clone." >&2
fi

echo "→ next build (static export → out/)"
npm run build

OUT_DIR="$ROOT/out"
if [[ ! -d "$OUT_DIR" ]]; then
  echo "error: expected $OUT_DIR after build" >&2
  exit 1
fi

echo "→ rsync out/ → $DEPLOY_DIR (exclude .git / .gitignore, --delete)"
rsync -a --delete \
  --exclude='.git' \
  --exclude='.gitignore' \
  "$OUT_DIR/" "$DEPLOY_DIR/"

echo
echo "Synced. Review and push manually:"
echo "  cd \"$DEPLOY_DIR\""
echo "  git add -A && git status"
echo "  git commit -m \"Deploy static build\" && git push"
