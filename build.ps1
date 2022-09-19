yarn build
Write-Output 'Uploading files to hostgator'
scp -r -P 22022 build/* root@agenciazop.com.br:/home/bapkasorvetes/cupons_webserver/
ssh hostgator "chown -R bapkasorvetes:bapkasorvetes /home/bapkasorvetes/cupons_webserver/* && screen -XS bapka-api quit"
ssh hostgator "cd /home/bapkasorvetes/cupons_webserver/bapka-api/ && git pull && sh /scripts/fernando/bapka-api.sh"