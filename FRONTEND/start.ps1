# Company Directory - Quick Start Script
# Run this script to start both the JSON Server and Vite Dev Server

Write-Host "Starting Company Directory Application..." -ForegroundColor Cyan
Write-Host ""

# Start JSON Server in a new window
Write-Host "Starting JSON Server on port 3001..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npx json-server --watch db.json --port 3001"

# Wait a moment for JSON Server to start
Start-Sleep -Seconds 3

# Start Vite Dev Server in a new window
Write-Host "Starting Vite Development Server on port 5173..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev"

Write-Host ""
Write-Host "Both servers are starting..." -ForegroundColor Green
Write-Host "JSON Server: http://localhost:3001" -ForegroundColor White
Write-Host "Application: http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit (servers will continue running in separate windows)..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
