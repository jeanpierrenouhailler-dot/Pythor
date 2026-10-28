#!/usr/bin/env python3
"""
Generate PWA icons for Pythor:
- public/favicon.svg
- public/icon-192.png
- public/icon-512.png
- public/icon-maskable-192.png
- public/icon-maskable-512.png
- public/apple-touch-icon.png
- public/favicon.ico
"""
import os
import subprocess

svg_standard = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="amberGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#6366f1" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background rounded rect -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect x="6" y="6" width="500" height="500" rx="106" fill="none" stroke="url(#shieldBorder)" stroke-width="4"/>

  <!-- Glowing outer hexagon shield -->
  <polygon points="256,54 440,154 440,358 256,458 72,358 72,154" 
           fill="#090d16" stroke="url(#shieldBorder)" stroke-width="6" filter="url(#glow)"/>

  <!-- Python Dual Curve Top (Cyan / Blue) -->
  <path d="M 252 118 C 172 118 176 156 176 156 L 176 194 L 256 194 L 256 206 L 146 206 C 146 206 108 202 108 276 C 108 350 142 346 142 346 L 176 346 L 176 302 C 176 302 174 250 226 250 L 306 250 C 306 250 354 252 354 206 C 354 160 354 118 252 118 Z M 208 148 C 218 148 226 156 226 166 C 226 176 218 184 208 184 C 198 184 190 176 190 166 C 190 156 198 148 208 148 Z"
        fill="url(#cyanBlue)" />

  <!-- Python Dual Curve Bottom (Amber / Gold) -->
  <path d="M 260 394 C 340 394 336 356 336 356 L 336 318 L 256 318 L 256 306 L 366 306 C 366 306 404 310 404 236 C 404 162 370 166 370 166 L 336 166 L 336 210 C 336 210 338 262 286 262 L 206 262 C 206 262 158 260 158 306 C 158 352 158 394 260 394 Z M 304 364 C 294 364 286 356 286 346 C 286 336 294 328 304 328 C 314 328 322 336 322 346 C 322 356 314 364 304 364 Z"
        fill="url(#amberGold)" />
</svg>
"""

# Maskable icon (with safe zone, scaled down to 80% with solid background)
svg_maskable = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="cyanBlueM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="amberGoldM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="shieldBorderM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#6366f1" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <!-- Full bleed solid background for maskable -->
  <rect width="512" height="512" fill="#020617"/>

  <!-- Centered safe-zone group scaled down -->
  <g transform="translate(51.2, 51.2) scale(0.8)">
    <polygon points="256,54 440,154 440,358 256,458 72,358 72,154" 
             fill="#090d16" stroke="url(#shieldBorderM)" stroke-width="8"/>

    <!-- Python Dual Curve Top (Cyan / Blue) -->
    <path d="M 252 118 C 172 118 176 156 176 156 L 176 194 L 256 194 L 256 206 L 146 206 C 146 206 108 202 108 276 C 108 350 142 346 142 346 L 176 346 L 176 302 C 176 302 174 250 226 250 L 306 250 C 306 250 354 252 354 206 C 354 160 354 118 252 118 Z M 208 148 C 218 148 226 156 226 166 C 226 176 218 184 208 184 C 198 184 190 176 190 166 C 190 156 198 148 208 148 Z"
          fill="url(#cyanBlueM)" />

    <!-- Python Dual Curve Bottom (Amber / Gold) -->
    <path d="M 260 394 C 340 394 336 356 336 356 L 336 318 L 256 318 L 256 306 L 366 306 C 366 306 404 310 404 236 C 404 162 370 166 370 166 L 336 166 L 336 210 C 336 210 338 262 286 262 L 206 262 C 206 262 158 260 158 306 C 158 352 158 394 260 394 Z M 304 364 C 294 364 286 356 286 346 C 286 336 294 328 304 328 C 314 328 322 336 322 346 C 322 356 314 364 304 364 Z"
          fill="url(#amberGoldM)" />
  </g>
</svg>
"""

os.makedirs("public", exist_ok=True)

with open("public/favicon.svg", "w") as f:
    f.write(svg_standard)

with open("/tmp/icon_std.svg", "w") as f:
    f.write(svg_standard)

with open("/tmp/icon_mask.svg", "w") as f:
    f.write(svg_maskable)

# Convert to standard PNGs
subprocess.run(["convert", "-background", "none", "-resize", "192x192", "/tmp/icon_std.svg", "public/icon-192.png"], check=True)
subprocess.run(["convert", "-background", "none", "-resize", "512x512", "/tmp/icon_std.svg", "public/icon-512.png"], check=True)
subprocess.run(["convert", "-background", "none", "-resize", "180x180", "/tmp/icon_std.svg", "public/apple-touch-icon.png"], check=True)
subprocess.run(["convert", "-background", "none", "-resize", "64x64", "/tmp/icon_std.svg", "public/favicon.ico"], check=True)

# Convert to maskable PNGs
subprocess.run(["convert", "-background", "none", "-resize", "192x192", "/tmp/icon_mask.svg", "public/icon-maskable-192.png"], check=True)
subprocess.run(["convert", "-background", "none", "-resize", "512x512", "/tmp/icon_mask.svg", "public/icon-maskable-512.png"], check=True)

print("PWA icons generated successfully!")
