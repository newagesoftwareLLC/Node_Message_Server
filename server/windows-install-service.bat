@ECHO OFF

:choice
set /P c=IMPORTANT: Did you edited the install-windows-service.js file to reflect the location of the message.js file?[Y/N]?
if /I "%c%" EQU "Y" goto :yes
if /I "%c%" EQU "N" goto :no
goto :choice

:yes
npm install -g node-windows
npm link node-windows
echo "DONE. Check the Windows services form to be sure it is installed."

:no
echo "Go edit install-windows-service.js with Notepad and come back to this batch file."
pause