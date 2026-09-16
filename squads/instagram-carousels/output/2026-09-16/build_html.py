import pathlib

base = pathlib.Path(__file__).parent
logo_b64 = (base / "design-assets" / "logo_b64.txt").read_text()
obj_b64 = (base / "design-assets" / "obj_b64.txt").read_text()
anton_b64 = (base / "design-assets" / "fonts" / "anton_b64.txt").read_text()
archivo_b64 = (base / "design-assets" / "fonts" / "archivo_b64.txt").read_text()

html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @font-face {{
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    src: url(data:font/woff2;base64,{anton_b64}) format('woff2');
  }}
  @font-face {{
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500 800;
    src: url(data:font/woff2;base64,{archivo_b64}) format('woff2');
  }}
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  html, body {{ width:1080px; height:1080px; overflow:hidden; }}
  body {{
    position:relative;
    font-family:'Archivo', sans-serif;
    background: linear-gradient(160deg, #0d0618 0%, #1a0b33 45%, #050208 100%);
    color:#fff;
  }}
  .glow {{
    position:absolute;
    top:48%; left:50%;
    width:920px; height:920px;
    transform:translate(-50%,-50%);
    background: radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.12) 40%, transparent 70%);
    z-index:0;
  }}
  .frame {{
    position:relative;
    z-index:2;
    width:1080px; height:1080px;
    padding:72px;
    display:flex;
    flex-direction:column;
  }}
  .logo {{ width:220px; height:auto; display:block; }}
  .intro {{
    margin-top:44px;
    font-size:32px;
    font-weight:600;
    color:#C9C4D0;
    line-height:1.3;
    max-width:820px;
    text-transform:uppercase;
    letter-spacing:0.5px;
  }}
  .headline {{
    position:relative;
    z-index:3;
    margin-top:20px;
    font-family:'Anton', sans-serif;
    font-size:88px;
    line-height:0.96;
    text-transform:uppercase;
  }}
  .headline .row {{ position:relative; display:block; white-space:nowrap; height:1em; }}
  .word-shadow {{
    position:absolute;
    top:0.10em; left:0.055em;
    z-index:0;
    font:inherit;
    white-space:nowrap;
  }}
  .word-main {{ position:relative; z-index:1; font:inherit; white-space:nowrap; }}
  .row.line1 .word-main {{ color:#FFFFFF; }}
  .row.line1 .word-shadow {{ color:#050208; }}
  .row.line2 .word-main {{
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
  }}
  .row.line2 .word-shadow {{ color:#3d1a5c; -webkit-text-fill-color:#3d1a5c; background:none; }}

  .object-wrap {{
    position:absolute;
    top:534px;
    left:50%;
    transform:translateX(-50%);
    width:480px;
    height:480px;
    z-index:1;
    pointer-events:none;
  }}
  .object-wrap img {{
    width:100%; height:100%;
    object-fit:contain;
    mask-image: radial-gradient(circle at center, black 46%, transparent 72%);
    -webkit-mask-image: radial-gradient(circle at center, black 46%, transparent 72%);
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.55));
  }}

  .support {{
    position:relative;
    z-index:4;
    margin-top:36px;
    font-size:34px;
    font-weight:500;
    color:#C9C4D0;
    line-height:1.5;
    max-width:880px;
  }}
  .support strong {{ color:#fff; font-weight:700; }}

  .cta {{
    position:relative;
    z-index:4;
    margin-top:auto;
    display:inline-flex;
    align-self:flex-start;
    padding:24px 52px;
    border-radius:999px;
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    color:#FFFFFF;
    font-weight:700;
    font-size:30px;
    box-shadow: 0 18px 40px rgba(124,58,237,0.45);
  }}
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="frame">
    <img class="logo" src="data:image/png;base64,{logo_b64}">
    <div class="intro">Setembro decide o regime tributário de 2027</div>
    <div class="headline">
      <div class="row line1">
        <span class="word-shadow">JÁ DECIDIU O IMPOSTO?</span>
        <span class="word-main">JÁ DECIDIU O IMPOSTO?</span>
      </div>
      <div class="row line2">
        <span class="word-shadow">E O MARKETING?</span>
        <span class="word-main">E O MARKETING?</span>
      </div>
    </div>
    <div class="object-wrap">
      <img src="data:image/jpeg;base64,{obj_b64}">
    </div>
    <div class="support">Prazo até dia 30 pra decidir o modelo de IBS/CBS de 2027. <strong>E o marketing, quando vira decisão?</strong></div>
    <div class="cta">Salva e Compartilha</div>
  </div>
</body>
</html>
"""

out = base / "slides" / "post.html"
out.write_text(html)
print("wrote", out, len(html), "chars")
