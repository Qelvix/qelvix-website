# Builds the PNG + ICO icons from branding/mark-light.png (run from anywhere):
#   powershell -NoProfile -File scripts/seo/make-icons.ps1
#
# Google Search wants a square raster/ICO favicon, larger than 48x48 if possible (developers.google.com/search/docs/appearance/favicon-in-search).
# iOS ignores SVG for the home-screen icon. Google shows favicons in a circle on phones, so the mark must sit well inside the
# canvas: with the rounded square filling the canvas, the circle cut off its corners (seen in a real mobile result, Nov 2026).
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$source = [System.Drawing.Image]::FromFile((Join-Path $root 'branding/mark-light.png'))

# mark-light.png is 704x704 with the Q inside roughly x 90-615, y 110-650: crop a square around it.
# The farthest point of the mark from the crop centre is the tail of the Q (about 348 of the 600 crop pixels), so drawing the
# crop at 79% of the canvas keeps every pixel of the mark inside a circle with about 8% of the radius to spare.
$crop = New-Object System.Drawing.Rectangle 52, 80, 600, 600
$markFraction = 0.79

function New-Icon([int]$size) {
    $bitmap = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $drawn = [int][Math]::Round($size * $markFraction)
    $offset = [int][Math]::Round(($size - $drawn) / 2)
    $g.DrawImage($source, (New-Object System.Drawing.Rectangle $offset, $offset, $drawn, $drawn), $crop, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    return $bitmap
}

$outputs = @{ 'favicon-48.png' = 48; 'apple-touch-icon.png' = 180; 'icon-192.png' = 192 }
foreach ($name in $outputs.Keys) {
    $bitmap = New-Icon $outputs[$name]
    $bitmap.Save((Join-Path $root "branding/$name"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
}

# favicon.ico at the site root (16, 32 and 48 px, each stored as PNG inside the ICO container).
$sizes = @(16, 32, 48)
$pngs = @()
foreach ($s in $sizes) {
    $bitmap = New-Icon $s
    $ms = New-Object System.IO.MemoryStream
    $bitmap.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngs += , $ms.ToArray()
    $ms.Dispose()
    $bitmap.Dispose()
}
$out = New-Object System.IO.MemoryStream
$w = New-Object System.IO.BinaryWriter $out
$w.Write([uint16]0); $w.Write([uint16]1); $w.Write([uint16]$sizes.Count)
$offset = 6 + 16 * $sizes.Count
for ($i = 0; $i -lt $sizes.Count; $i++) {
    $s = $sizes[$i]
    $w.Write([byte]$s); $w.Write([byte]$s); $w.Write([byte]0); $w.Write([byte]0)
    $w.Write([uint16]1); $w.Write([uint16]32)
    $w.Write([uint32]$pngs[$i].Length); $w.Write([uint32]$offset)
    $offset += $pngs[$i].Length
}
foreach ($p in $pngs) { $w.Write($p) }
$w.Flush()
[System.IO.File]::WriteAllBytes((Join-Path $root 'favicon.ico'), $out.ToArray())
$w.Dispose(); $out.Dispose()

$source.Dispose()
