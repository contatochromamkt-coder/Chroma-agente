import pathlib

base = pathlib.Path(__file__).parent
logo_b64 = (base / "design-assets" / "logo_b64.txt").read_text()
obj_b64 = (base / "design-assets" / "obj_b64.txt").read_text()
anton_b64 = (base / "design-assets" / "fonts" / "anton_b64.txt").read_text()
archivo500_b64 = (base / "design-assets" / "fonts" / "archivo500_b64.txt").read_text()
archivo700_b64 = (base / "design-assets" / "fonts" / "archivo700_b64.txt").read_text()

HEADLINE_SIZE = 82

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
    font-weight: 500;
    src: url(data:font/woff2;base64,{archivo500_b64}) format('woff2');
  }}
  @font-face {{
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    src: url(data:font/woff2;base64,{archivo700_b64}) format('woff2');
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
    top:52%; left:50%;
    width:960px; height:960px;
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
    font-weight:700;
    color:#C9C4D0;
    line-height:1.3;
    max-width:820px;
    text-transform:uppercase;
    letter-spacing:0.5px;
  }}
  .headline {{
    position:relative;
    z-index:3;
    margin-top:24px;
    font-family:'Anton', sans-serif;
    font-size:{HEADLINE_SIZE}px;
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
    top:452px;
    left:50%;
    transform:translateX(-50%);
    width:640px;
    height:400px;
    z-index:1;
    pointer-events:none;
  }}
  .object-wrap img {{
    width:100%; height:100%;
    object-fit:contain;
    mix-blend-mode: screen;
    mask-image: radial-gradient(circle at center, black 40%, transparent 68%);
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 68%);
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.35));
  }}

  .support {{
    position:relative;
    z-index:4;
    margin-top:270px;
    margin-bottom:16px;
    font-size:34px;
    font-weight:500;
    color:#C9C4D0;
    line-height:1.45;
    max-width:900px;
  }}
  .support strong {{ color:#fff; font-weight:700; }}

  .cta {{
    position:relative;
    z-index:4;
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
    <div class="intro">Toda mensagem de atendimento no WhatsApp Business passa a ter custo a partir de outubro</div>
    <div class="headline">
      <div class="row line1">
        <span class="word-shadow">WHATSAPP VAI COBRAR</span>
        <span class="word-main">WHATSAPP VAI COBRAR</span>
      </div>
      <div class="row line2">
        <span class="word-shadow">SUA BAGUNÇA TAMBÉM</span>
        <span class="word-main">SUA BAGUNÇA TAMBÉM</span>
      </div>
    </div>
    <div class="object-wrap">
      <img src="data:image/jpeg;base64,{obj_b64}">
    </div>
    <div class="support"><strong>Da mensagem 1.001 em diante</strong>, cada resposta sem funil vira custo real, todo mês.</div>
    <div class="cta">Salva Antes de Outubro</div>
  </div>
</body>
</html>
"""

out = base / "slides"
out.mkdir(exist_ok=True)
out = out / "post.html"
out.write_text(html)
print("wrote", out, len(html), "chars")
