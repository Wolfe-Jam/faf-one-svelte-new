# FAFb 0.9 testdrive — no Rust, no GitHub account, no token.
# Makes ~/fafb-drive. Puts faf on PATH via env.ps1.
$ErrorActionPreference = "Stop"
$Version = if ($env:FAFB_BINARY_VERSION) { $env:FAFB_BINARY_VERSION } else { "0.9.0" }
$Dest = if ($env:FAFB_DRIVE_HOME) { $env:FAFB_DRIVE_HOME } else { Join-Path $HOME "fafb-drive" }
$Cache = if ($env:FAFB_CACHE_DIR) { $env:FAFB_CACHE_DIR } else { Join-Path $HOME ".cache\fafb" }
$Triple = "x86_64-pc-windows-msvc"
$Asset = "fafb-$Version-$Triple.zip"
$Base = if ($env:FAFB_DIST_BASE) { $env:FAFB_DIST_BASE.TrimEnd("/") } else { "https://github.com/Wolfe-Jam/fafb-dist/releases/download/v$Version" }
$Url = "$Base/$Asset"
$Dir = Join-Path $Cache "$Version\$Triple"
New-Item -ItemType Directory -Force -Path $Dir | Out-Null

$Faf = Join-Path $Dir "faf.exe"
if (-not (Test-Path $Faf)) {
    Write-Host "Downloading FAFb…"
    $Tmp = Join-Path $env:TEMP ("fafb-" + [guid]::NewGuid().ToString())
    New-Item -ItemType Directory -Force -Path $Tmp | Out-Null
    try {
        $Zip = Join-Path $Tmp $Asset
        Invoke-WebRequest -Uri $Url -OutFile $Zip
        Expand-Archive -Path $Zip -DestinationPath $Tmp -Force
        $Found = Get-ChildItem -Path $Tmp -Recurse -Filter "faf.exe" | Select-Object -First 1
        if (-not $Found) { throw "Archive did not contain faf.exe." }
        $BinDir = $Found.DirectoryName
        foreach ($bin in @("faf.exe", "fafm.exe", "fafa.exe")) {
            $src = Join-Path $BinDir $bin
            if (Test-Path $src) { Copy-Item $src (Join-Path $Dir $bin) -Force }
        }
    } finally {
        Remove-Item -Recurse -Force $Tmp -ErrorAction SilentlyContinue
    }
}

New-Item -ItemType Directory -Force -Path $Dest | Out-Null
@"
# FAFb 0.9 testdrive — this machine (PowerShell)
`$env:Path = "$Dir;" + `$env:Path
"@ | Set-Content -Path (Join-Path $Dest "env.ps1")

if (-not (Test-Path (Join-Path $Dest "project.faf"))) {
    Write-Host "Creating $Dest …"
    Push-Location $Dest
    try { & $Faf init fafb-drive } finally { Pop-Location }
}

Write-Host ""
Write-Host "Ready. Your folder is $Dest"
Write-Host "A clean project. Not the compiler."
Write-Host ""
Write-Host "  cd $Dest"
Write-Host "  . .\env.ps1"
Write-Host "  faf --help"
Write-Host "  faf status"
Write-Host ""
Write-Host "Then the rest of the drive on https://faf.one/fafb-drive"
