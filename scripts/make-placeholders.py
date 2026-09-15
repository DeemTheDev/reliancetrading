"""
Generates the placeholder artwork in public/images/ (abstract brand-coloured
SVGs) plus the favicon and Open Graph image. Run once; re-run after changing
the colours below. Replace the SVGs with real photographs before launch - the
README lists what each file is used for and the recommended size.

    python scripts/make-placeholders.py
"""
import os
import random

BRAND = "#1A6FB5"
BRAND_DARK = "#14548C"
BRAND_LIGHT = "#8DBCE6"
NAVY = "#132646"
NAVY2 = "#27477C"

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "public", "images")
os.makedirs(OUT, exist_ok=True)


def abstract(w, h, seed, palette=("dark", "brand"), density=9, label=None):
    """Gradient background with soft translucent shapes - reads as a 'photo' block."""
    rnd = random.Random(seed)
    if palette == "light":
        g0, g1, shapes, op = "#FFFFFF", "#EEF4FA", [BRAND_LIGHT, BRAND, NAVY2], (0.05, 0.12)
    elif palette == "brand":
        g0, g1, shapes, op = BRAND, BRAND_DARK, ["#FFFFFF", BRAND_LIGHT, NAVY], (0.08, 0.22)
    else:
        g0, g1, shapes, op = NAVY2, NAVY, [BRAND, BRAND_LIGHT, "#FFFFFF"], (0.10, 0.28)
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">',
        "<defs>",
        f'<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{g0}"/><stop offset="1" stop-color="{g1}"/></linearGradient>',
        f'<pattern id="grid" width="{w/12:.1f}" height="{w/12:.1f}" patternUnits="userSpaceOnUse"><path d="M {w/12:.1f} 0 L 0 0 0 {w/12:.1f}" fill="none" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1"/></pattern>',
        "</defs>",
        f'<rect width="{w}" height="{h}" fill="url(#g)"/>',
        f'<rect width="{w}" height="{h}" fill="url(#grid)"/>',
    ]
    for i in range(density):
        c = rnd.choice(shapes)
        o = rnd.uniform(*op)
        kind = rnd.random()
        if kind < 0.5:
            r = rnd.uniform(w * 0.08, w * 0.32)
            parts.append(f'<circle cx="{rnd.uniform(0, w):.0f}" cy="{rnd.uniform(0, h):.0f}" r="{r:.0f}" fill="{c}" fill-opacity="{o:.2f}"/>')
        elif kind < 0.8:
            rw, rh = rnd.uniform(w * 0.15, w * 0.45), rnd.uniform(h * 0.1, h * 0.4)
            parts.append(
                f'<rect x="{rnd.uniform(-rw/2, w - rw/2):.0f}" y="{rnd.uniform(-rh/2, h - rh/2):.0f}" width="{rw:.0f}" height="{rh:.0f}" rx="{min(rw, rh) * 0.2:.0f}" '
                f'fill="{c}" fill-opacity="{o:.2f}" transform="rotate({rnd.uniform(-20, 20):.0f} {w/2} {h/2})"/>'
            )
        else:
            x1, y1 = rnd.uniform(0, w), rnd.uniform(0, h)
            parts.append(f'<path d="M {x1:.0f} {y1:.0f} Q {rnd.uniform(0, w):.0f} {rnd.uniform(0, h):.0f} {rnd.uniform(0, w):.0f} {rnd.uniform(0, h):.0f}" stroke="{c}" stroke-opacity="{o + 0.1:.2f}" stroke-width="{rnd.uniform(6, 22):.0f}" fill="none" stroke-linecap="round"/>')
    if label:
        parts.append(f'<text x="{w/2}" y="{h - 28}" text-anchor="middle" font-family="Arial, sans-serif" font-size="{max(14, w // 60)}" fill="#FFFFFF" fill-opacity="0.45">{label}</text>')
    parts.append("</svg>")
    return "\n".join(parts)


def write(name, svg):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(svg)
    print("  ", name)


print("Writing placeholders to", os.path.relpath(OUT))
# Hero backgrounds (1920x1080 recommended for the real photos)
write("hero-home.svg", abstract(1920, 1080, 1, "dark", 10))
write("hero-generic.svg", abstract(1600, 900, 2, "dark", 8))
for slug, seed in [("about", 3), ("team", 4), ("services", 5), ("faqs", 6), ("contact", 7), ("news", 8),
                   ("seller-advances", 9), ("commission-advances", 10), ("bond-advances", 11), ("property-buyers", 12), ("secured-business-loans", 13)]:
    write(f"hero-{slug}.svg", abstract(1600, 900, seed, "dark", 8))
# Product photos (1200x900)
for slug, seed in [("seller-advances", 21), ("commission-advances", 22), ("bond-advances", 23), ("property-buyers", 24), ("secured-business-loans", 25)]:
    write(f"product-{slug}.svg", abstract(1200, 900, seed, "dark", 9))
# Home page feature thumbnails (square, shown as circles) + focus image
write("feature-national.svg", abstract(400, 400, 31, "brand", 6))
write("feature-focus.svg", abstract(400, 400, 32, "brand", 6))
write("focus.svg", abstract(1200, 900, 33, "dark", 9))
# Very light texture behind cards
write("texture-light.svg", abstract(1920, 1080, 41, "light", 10))
# Blog cover placeholder (16:9)
write("blog-placeholder.svg", abstract(1200, 675, 51, "brand", 8))

# Team placeholder: neutral silhouette
write(
    "team-placeholder.svg",
    f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
<rect width="600" height="600" fill="#E9F2FB"/>
<circle cx="300" cy="230" r="105" fill="{BRAND_LIGHT}"/>
<path d="M105 560c20-130 100-200 195-200s175 70 195 200z" fill="{BRAND_LIGHT}"/>
<text x="300" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="{NAVY2}" fill-opacity="0.6">Photo to follow</text>
</svg>''',
)

# Favicon: brand square with the logo bar and an R
with open(os.path.join(OUT, "..", "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<rect width="64" height="64" rx="12" fill="{BRAND}"/>
<rect x="12" y="14" width="5" height="36" fill="#FFFFFF"/>
<text x="24" y="47" font-family="Montserrat, 'Century Gothic', Arial, sans-serif" font-weight="800" font-size="38" fill="#FFFFFF">R</text>
</svg>'''
    )
print("   ../favicon.svg")

# Open Graph image (1200x630) with the wordmark
og = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{NAVY2}"/><stop offset="1" stop-color="{NAVY}"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<circle cx="1010" cy="120" r="260" fill="{BRAND}" fill-opacity="0.35"/>
<circle cx="120" cy="560" r="200" fill="{BRAND_LIGHT}" fill-opacity="0.18"/>
<rect x="120" y="215" width="14" height="150" fill="{BRAND}"/>
<text x="160" y="300" font-family="Montserrat, 'Century Gothic', Arial, sans-serif" font-weight="800" font-size="88" letter-spacing="12" fill="#FFFFFF">RELIANCE</text>
<text x="160" y="352" font-family="Montserrat, 'Century Gothic', Arial, sans-serif" font-weight="800" font-size="36" letter-spacing="19" fill="{BRAND_LIGHT}">TRADING SA</text>
<text x="160" y="440" font-family="Arial, sans-serif" font-size="30" fill="#FFFFFF" fill-opacity="0.85">Property bridging finance - easy, efficient, fast</text>
<text x="160" y="490" font-family="Arial, sans-serif" font-size="26" fill="#FFFFFF" fill-opacity="0.65">reliancetrading.co.za</text>
</svg>'''
write("og-default.svg", og)

# Apple touch icon (PNG) - requires Pillow; skipped if unavailable
try:
    from PIL import Image, ImageDraw

    img = Image.new("RGBA", (180, 180), (26, 111, 181, 255))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, 179, 179], radius=36, fill=(26, 111, 181, 255))
    d.rectangle([34, 40, 48, 140], fill=(255, 255, 255, 255))
    try:
        from PIL import ImageFont
        font = ImageFont.truetype("C:/Windows/Fonts/GOTHICB.TTF", 108)
    except Exception:
        font = None
    d.text((62, 30), "R", fill=(255, 255, 255, 255), font=font)
    img.save(os.path.join(OUT, "..", "apple-touch-icon.png"))
    print("   ../apple-touch-icon.png")
except ImportError:
    print("   (Pillow not installed - apple-touch-icon.png skipped)")
