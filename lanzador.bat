cd ..
cd ..
cd ..
cd ..
cd ..
cd ..
cd ScriptContadoresImpresoras
echo *****************>> logs\log%date:~-4%_%date:~3,2%_%date:~0,2%.log
date /t >> logs\log%date:~-4%_%date:~3,2%_%date:~0,2%.log
time /t >> logs\log%date:~-4%_%date:~3,2%_%date:~0,2%.log
node scriptLeerContadoresV2.js >> logs\log%date:~-4%_%date:~3,2%_%date:~0,2%.log
exit