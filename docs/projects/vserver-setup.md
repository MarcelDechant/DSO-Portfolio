# Your first Cloud-VM

In this README file you will find information on how to handle your first Cloud-VM. Apart from information related to the first-time login, this document also provides reading links for other interesting topics around Linux server environments or server administration.

## Table of Contents

- [Your first Cloud-VM](#your-first-cloud-vm)
  - [Table of Contents](#table-of-contents)
  - [Create an SSH-Key pair](#create-an-ssh-key-pair)
  - [First-Time Login](#first-time-login)
  - [Add the public key to the VM](#add-the-public-key-to-the-vm)
  - [Disable Password-Logins](#disable-password-logins)
  - [How to configure and Start a Web Server](#how-to-configure-and-start-a-web-server)
    - [After Configuring the Web Server](#after-configuring-the-web-server)
  - [SSH Connection Aliases](#ssh-connection-aliases)
    - [Saving Aliases Permanently](#saving-aliases-permanently)
  - [Conclusion](#conclusion)
    - [Congratulations! You have successfully set up your Cloud-VM, configured SSH keys for secure access, disabled password authentication and installed and customized a web server with Nginx.](#congratulations-you-have-successfully-set-up-your-cloud-vm-configured-ssh-keys-for-secure-access-disabled-password-authentication-and-installed-and-customized-a-web-server-with-nginx)
      - [Happy Coding!](#happy-coding)

## Create an SSH-Key pair

In order to create a SSH-Key pair in your local machine, you can run the following command and follow the instructions in your Terminal:

```bash
# create a ED25519 key pair
# modern alternative to RSA keys
$ ssh-keygen -t ed25519
```

## First-Time Login 

When logging in to any application, we usually use username/password combinations. For this example we use a username/password combination for the first login only - for production-server environments, we want to use something safer than just a password alongside the username, we want to use a personalized key that allows us to connect to a remote shell on the server - this is the so-called `Secure Shell Protocol (SSH)` and the personalized key is called SSH-Key.

```bash
$ ssh DeinBenutzerNameund@IPadresse #example root@123.4.5.678
password:  #Here is the password for access
```

## Add the public key to the VM 

``` bash
#ssh-copy-id -i <path/to/your/key>.pub <user>@<hostname>
ssh-copy-id -i $HOME/.ssh/id_ed25519.pub example@123.4.5.678

/usr/local/bin/ssh-copy-id: INFO: Source of Key(s) to be installed: "/Users/example/.ssh/.id_ed25519"
/usr/local/bin/ssh-copy-id: INFO: attempting to log in with the new key(s) to filter out any that are already installed 
/usr/local/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed —— if you are prompted now, it is to install the new keys
example@123.4.5.678 password:

Number of key(s) added:    1 

Now try login into the machine with: "ssh 'example@123.4.5.678'"
```


## Disable Password-Logins 

In this section, information about disabling password-based logins will be provided.
Passwords can be a potential source of security vulnerabilities, which is why password logins should be disabled in favor of SSH-key authentication.

1. Adjust the configuration in `/etc/ssh/sshd_config`:
```bash
sudo nano /etc/ssh/sshd_config
```
2. Find the line `#PasswordAuthentication yes` and change it to `PasswordAuthentication no`:
```bash
#From :
#PasswordAuthentication yes

#To:
PasswordAuthentication no
```
3. Save the file and exit: 
    - To save, press Ctrl+o (^O)
    - To exit, press Ctrl+x (^X)


4. Restart the `sshd` service to reload the config changes:
```bash
sudo systemctl restart ssh.service
```

## How to configure and Start a Web Server

In this section, you will learn about running an `Nginx` webserver on a ubuntu cloud vm. After installing the webserver, you should be able to see the nginx start page in your browser.

```bash
$ sudo apt update
$ sudo apt install nginx -y
```

### After Configuring the Web Server

After installing and testing your web server, you will now configure it to render an alternative `index.html` instead of the default `Nginx` start page. 

Follow these steps to reconfigure the nginx installation on your cloud VM.

1. Create a new file `alternate-index.html` in the `/var/www/alternatives/`directory:
```bash
sudo nano /var/www/alternatives/alternate-index.html
```
Add the following content to the file:
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Index</title>
</head>
<body>
    <h1>Hello, this is my new index.html!</h1>
</body>
</html>
```
 - Ensure that the directory `/var/www/` exists by running:
 ```bash
 ls /var/www/
 ```
 - If the directory `/var/www/alternatives/`does not exist, create it by running:
 ```bash
 sudo mkdir /var/www/alternatives/
 ```

2. Create a new configuration for nginx under `/etc/nginx/sites-enabled/`, named `alternatives`:
 - Run:
 ```bash
  `sudo nano /etc/nginx/sites-enabled/alternatives`
  ```
 - Add the following configuration:
 ```bash
 server {
    listen 8081;
    listen [::]:8081;

    root /var/www/alternatives;
    index alternate-index.html;

    location / {
        try_files $uri $uri/ =404;
     }
 }
```

3. Restart the `nginx`service to apply the changes:
```bash
sudo service nginx restart
```
 - Open your browser and go to `localhost:8081` or `123.4.5.678:8081` to see your newly configured alternative start page for the nginx web server.

## SSH Connection Aliases

- Create your alias with an absolute path:
```bash
alias YourAliasName="ssh -i ~/Your/path/to/the/Key USERNAME@123.4.5.678"
```
- Show all existing aliases
```bash
alias
```
- To show only your alias
```bash 
alias | grep YourAliasName 
```
- To log in using your alias, just type it in the terminal:
```bash
YourAliasName
```
### Saving Aliases Permanently
If you want to use your alias permanently, even after closing your terminal or restarting your PC, you need to add it to the `~/.bashrc` file. You can do this easily with the following command:
```bash
echo "alias YourAliasName='ssh -i ~/Your/path/to/the/Key USERNAME@123.4.5.678'" >> ~/.bashrc
```
Afterwards, you need to reload the file to make the alias available immediately. You can either restart your terminal or run the following command:
```bash
source ~/.bashrc
```

## Conclusion
### Congratulations! You have successfully set up your Cloud-VM, configured SSH keys for secure access, disabled password authentication and installed and customized a web server with Nginx.


#### Happy Coding! 