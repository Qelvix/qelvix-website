# Builds the PNG icons from branding/mark-light.png (run from anywhere):
#   powershell -NoProfile -File scripts/seo/make-icons.ps1
#
# favicon.svg alone is not enough: Google's favicon guidelines want a raster icon that is a multiple of 48px, and
# iOS ignores SVG for the home-screen icon. The mark artwork has padding, so it is cropped in tight first.
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$source = [System.Drawing.Image]::FromFile((Join-Path $root 'branding/mark-light.png'))

# mark-light.png is 704x704 with the Q inside roughly x 90-615, y 110-650: crop a square around it.
$crop = New-Object System.Drawing.Rectangle 52, 80, 600, 600

$outputs = @{ 'favicon-48.png' = 48; 'apple-touch-icon.png' = 180; 'icon-192.png' = 192 }
foreach ($name in $outputs.Keys) {
    $size = $outputs[$name]
    $bitmap = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($source, (New-Object System.Drawing.Rectangle 0, 0, $size, $size), $crop, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bitmap.Save((Join-Path $root "branding/$name"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
}
$source.Dispose()
