from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math
import random

ROOT = Path(__file__).resolve().parents[1]
QR_PATH = ROOT / "public" / "qr-feliz-21-de-septiembre-k.png"
OUT_PATH = ROOT / "public" / "qr-feliz-21-de-septiembre-k-decorado.png"

W, H = 1200, 1500
CREAM, PAPER, BROWN = "#FFF8E7", "#FFFCF5", "#3F2615"
AMBER, GOLD, SOFT_GOLD, GREEN = "#F59E0B", "#F8C537", "#FFE7A3", "#6E8B4D"


def font(name, size):
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


def flower(canvas, cx, cy, radius, petals=12, petal_color=GOLD, center=BROWN, rotation=0):
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    for index in range(petals):
        angle = rotation + (360 / petals) * index
        a = math.radians(angle)
        px = cx + math.cos(a) * radius * 0.68
        py = cy + math.sin(a) * radius * 0.68
        petal = Image.new("RGBA", (radius * 2, radius * 2), (0, 0, 0, 0))
        pd = ImageDraw.Draw(petal)
        pd.ellipse(
            (radius * 0.67, radius * 0.08, radius * 1.33, radius * 1.28),
            fill=petal_color,
            outline="#E9A816",
            width=max(1, radius // 18),
        )
        petal = petal.rotate(-angle + 90, resample=Image.Resampling.BICUBIC, expand=False)
        layer.alpha_composite(petal, (int(px - radius), int(py - radius)))
    draw.ellipse(
        (cx - radius * 0.28, cy - radius * 0.28, cx + radius * 0.28, cy + radius * 0.28),
        fill=center,
    )
    canvas.alpha_composite(layer)


canvas = Image.new("RGBA", (W, H), CREAM)
draw = ImageDraw.Draw(canvas)

draw.rounded_rectangle((42, 42, W - 42, H - 42), radius=54, fill=SOFT_GOLD)
draw.rounded_rectangle((58, 58, W - 58, H - 58), radius=46, fill=PAPER, outline=AMBER, width=4)
draw.rounded_rectangle((79, 79, W - 79, H - 79), radius=36, outline="#F7D77C", width=2)

random.seed(21)
for y in range(105, H - 105, 30):
    for x in range(105, W - 105, 30):
        if random.random() > 0.43:
            draw.ellipse((x - 2, y - 2, x + 2, y + 2), fill="#F5D889")

draw.arc((-50, 40, 330, 560), 285, 356, fill=GREEN, width=7)
draw.arc((W - 280, H - 560, W + 70, H - 30), 105, 176, fill=GREEN, width=7)
draw.ellipse((115, 265, 155, 340), fill="#91AA64")
draw.ellipse((W - 160, H - 340, W - 120, H - 265), fill="#91AA64")

flower(canvas, 135, 135, 74, petals=14)
flower(canvas, W - 135, H - 135, 74, petals=14)
flower(canvas, W - 132, 154, 45, petal_color="#FFF4C7")
flower(canvas, 132, H - 154, 45, petal_color="#FFF4C7")
flower(canvas, 245, 105, 26, petals=10, petal_color="#FFD968")
flower(canvas, W - 250, H - 105, 26, petals=10, petal_color="#FFD968")

title_font, subtitle_font = font("georgiab.ttf", 64), font("arial.ttf", 25)
small_font = font("arialbd.ttf", 22)
title = "Feliz 21 de septiembre K."
subtitle = "Un pequeño lugar para nuestra historia"
title_box = draw.textbbox((0, 0), title, font=title_font)
subtitle_box = draw.textbbox((0, 0), subtitle, font=subtitle_font)
draw.text(((W - (title_box[2] - title_box[0])) / 2, 155), title, font=title_font, fill=BROWN)
draw.text(((W - (subtitle_box[2] - subtitle_box[0])) / 2, 242), subtitle, font=subtitle_font, fill="#8A6247")
draw.line((390, 298, 810, 298), fill="#EDBB3D", width=3)

draw.rounded_rectangle((142, 330, W - 142, 1208), radius=44, fill="#FFFFFF", outline="#F0C45B", width=4)
qr = Image.open(QR_PATH).convert("RGBA").resize((820, 820), Image.Resampling.NEAREST)
canvas.alpha_composite(qr, (190, 360))

footer = "ESCANEA PARA ABRIR NUESTRO RECUERDO"
footer_box = draw.textbbox((0, 0), footer, font=small_font)
draw.text(((W - (footer_box[2] - footer_box[0])) / 2, 1265), footer, font=small_font, fill="#9A5A17")
draw.line((330, 1320, 870, 1320), fill="#F2C65A", width=2)

for x, size in [(450, 24), (520, 32), (600, 40), (680, 32), (750, 24)]:
    flower(canvas, x, 1380, size, petal_color=GOLD)

canvas.convert("RGB").save(OUT_PATH, quality=96, optimize=True)
print(OUT_PATH)
