npm install -g pm2
pm2 update

export app_root=/usr/referyes
if [ -d "$app_root" ]; then
	rm -rf /usr/referyes
	mkdir -p /usr/referyes
else
	mkdir -p /usr/referyes
fi