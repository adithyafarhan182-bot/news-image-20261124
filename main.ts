// news-image-20261124 — "THE WORLD TODAY": one newspaper front page summing up
// Tuesday 24 November 2026. The program copies the entry image to /output/entry.png.
// Node 22, standard library only; no network; deterministic — both runs write the
// same bytes, because the image is a fixed file in this repository.
//
// The image itself (entry.png, 1024x1024, real PNG):
//   Masthead "THE WORLD TODAY — TUESDAY, 24 NOVEMBER 2026".
//   Lead: "HUANG IS BACK — NVIDIA SOARS 31%" — Jensen Huang reinstated as Nvidia CEO,
//   shares +31% (+~$950bn) Monday, Nasdaq +6.5%, Asian markets surging Tuesday.
//   Also: 24 dead in the Indonesia candy-factory fire; Ukraine sinks a Russian
//   warship off Libya; UN chief calls for AI rules within a year; South Korea
//   scrambles jets as Russian aircraft approach. Hero photo is AI-generated
//   (glowing chip, rising market line, no text); all type was set exactly, so no
//   letter in the image can come out garbled.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
