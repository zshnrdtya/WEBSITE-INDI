# Script to fix logo file extensions based on actual file type

function Get-FileType {
    param([string]$FilePath)
    
    $bytes = [System.IO.File]::ReadAllBytes($FilePath)
    if ($bytes.Length -lt 4) { return "UNKNOWN" }
    
    $magic = [System.Text.Encoding]::ASCII.GetString($bytes[0..3])
    
    # Check for PNG
    if ($magic[1..3] -join '' -eq 'PNG') { return "PNG" }
    
    # Check for SVG (starts with < or xml)
    if ($magic[0] -eq '<' -or ($bytes.Length -gt 5 -and [System.Text.Encoding]::ASCII.GetString($bytes[0..4]) -like '*xml*')) {
        return "SVG"
    }
    
    # Check for WEBP (RIFF....WEBP)
    if ($magic -eq 'RIFF' -and $bytes.Length -gt 11) {
        $webp = [System.Text.Encoding]::ASCII.GetString($bytes[8..11])
        if ($webp -eq 'WEBP') { return "WEBP" }
    }
    
    # Check for JPEG
    if ($bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8) { return "JPG" }
    
    return "UNKNOWN"
}

function Fix-LogoExtensions {
    param([string]$FolderPath)
    
    Write-Host "Processing folder: $FolderPath"
    
    $svgFiles = Get-ChildItem "$FolderPath\*.svg" -ErrorAction SilentlyContinue
    $fixed = 0
    $skipped = 0
    
    foreach ($file in $svgFiles) {
        $actualType = Get-FileType $file.FullName
        $correctExt = $actualType.ToLower()
        
        if ($actualType -eq "SVG") {
            Write-Host "OK: $($file.Name) - Already correct SVG"
            $skipped++
        }
        elseif ($actualType -ne "UNKNOWN") {
            $newName = [System.IO.Path]::ChangeExtension($file.Name, $correctExt)
            $newPath = Join-Path $file.DirectoryName $newName
            
            Write-Host "Renaming: $($file.Name) to $newName (actual type: $actualType)"
            
            try {
                Move-Item -Path $file.FullName -Destination $newPath -Force
                $fixed++
            }
            catch {
                Write-Host "Failed to rename: $_"
            }
        }
        else {
            Write-Host "Unknown: $($file.Name) - Unknown file type, skipping"
            $skipped++
        }
    }
    
    Write-Host "Summary: Fixed $fixed files, Skipped $skipped files"
}

# Fix both folders
Fix-LogoExtensions "d:\PKL\frontend-indi\public\our-credintial\logo-nasional"
Fix-LogoExtensions "d:\PKL\frontend-indi\public\our-credintial\logo-internasional"

Write-Host "Done! Please update the component code to reference the new file extensions."
