# Deployment Plan

## 1. install Node.js
``` code
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```
## 2. install process manager
``` code
npm install -g pm2
```
## 3. intergrate bitbucket
### 3.1 create ssh key
``` code
ssh-keygen -t ed25519 -C "server"
cat ~/.ssh/id_ed25519.pub
```
- add the key to bitbucket 
- go to bitbucket and clone the project

### clone the project
``` code
git clone git clone https://ditm2@bitbucket.org/amaken-site/amaken-site.git
cd amaken-site
```
### install dependencies
``` code
npm install
```
## add .env file 
``` code
nano .env
```
- add variables to ERPNEXT user credentials
``` code
NEXT_PUBLIC_ERPNEXT_URL= 
ERP_API_KEY=
ERP_API_SECRET=
```

## 4. run the project
``` code
pm2 start npm --name "amaken-site" -- run dev
```
## save the project
``` code
pm2 save
```
## start the project on boot
``` code
pm2 startup
```
## install nginx
``` code
sudo apt install nginx
```
## configure nginx
``` code
sudo nano /etc/nginx/sites-available/amaken-site
```
- add the following configuration
``` code
server {
    listen 80;
    server_name goamaken.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## enable the site
``` code
sudo ln -s /etc/nginx/sites-available/amaken-site /etc/nginx/sites-enabled/
```
## test the configuration
``` code
sudo nginx -t
```

## add SSL 
# i dont know how 
- i found this 
``` code
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d goamaken.com
```

 