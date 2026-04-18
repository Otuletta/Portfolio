/**
 * patch-engine-core.js
 *
 * Postinstall script for @null/engine-core (installed via github:Otuletta/NULL).
 *
 * PROBLEM:
 *   The package's package.json declares "files": ["dist", "NullGame"].
 *   This means npm/GitHub installs only NullGame/ but NOT src/.
 *   However, NullGame/ files import from '../src/' which doesn't exist.
 *
 * SOLUTION:
 *   Download the missing src/ files from GitHub and create them locally.
 *   This runs after every npm install, guaranteeing the files are present
 *   on all platforms (local and Vercel).
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const GITHUB_REPO = 'Otuletta/NULL';
const GITHUB_BRANCH = 'main';

const engineRoot = path.resolve(__dirname, '..', 'node_modules', '@null', 'engine-core');
const nullGameDir = path.join(engineRoot, 'NullGame');
const srcDir = path.join(engineRoot, 'src');

// Only run if the package is installed
if (!fs.existsSync(nullGameDir)) {
    console.log('[patch-engine-core] NullGame directory not found, skipping.');
    process.exit(0);
}

// Only run if src/ is missing (idempotent)
if (fs.existsSync(srcDir)) {
    console.log('[patch-engine-core] src/ already exists, skipping.');
    process.exit(0);
}

console.log('[patch-engine-core] src/ missing — fetching from GitHub...');

// Files to fetch from src/ (these are the ones imported by NullGame/)
const SRC_FILES = [
    'src/types.ts',
    'src/index.ts',
    'src/ai/Bot.ts',
    'src/ai/Evaluator.ts',
    'src/pieces/Pieces.ts',
    'src/pieces/WallKicks.ts',
    'src/board/Board.ts',
    'src/fsm/Fsm.ts',
    'src/garbage/Garbage.ts',
    'src/prng/Prng.ts',
];

function fetchFile(filePath) {
    return new Promise((resolve, reject) => {
        const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${filePath}`;
        https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                // Follow redirect
                https.get(res.headers.location, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => resolve(data));
                    res2.on('error', reject);
                }).on('error', reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function run() {
    let fetched = 0;
    let failed = 0;

    for (const relPath of SRC_FILES) {
        const destPath = path.join(engineRoot, relPath);
        const destDir = path.dirname(destPath);

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        if (fs.existsSync(destPath)) continue;

        try {
            const content = await fetchFile(relPath);
            fs.writeFileSync(destPath, content, 'utf-8');
            console.log(`[patch-engine-core] Fetched: ${relPath}`);
            fetched++;
        } catch (err) {
            console.warn(`[patch-engine-core] WARN: Could not fetch ${relPath}: ${err.message}`);
            failed++;
        }
    }

    if (failed > 0) {
        console.warn(`[patch-engine-core] ${failed} file(s) could not be fetched. Build may fail.`);
    } else {
        console.log(`[patch-engine-core] Done. Fetched ${fetched} file(s).`);
    }
}

run().catch(err => {
    console.error('[patch-engine-core] Fatal error:', err);
    // Don't fail the install — webpack fallbacks may still work
    process.exit(0);
});
