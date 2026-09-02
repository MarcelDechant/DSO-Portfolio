# Linux Server Administration

This section covers essential tasks for managing Linux servers, including user management, system monitoring, networking, package updates, and security.

---

## 1. Users and Permissions

- `useradd`, `usermod`, `passwd` – Create, modify, or set passwords for users.
 ```bash
sudo useradd newuser
sudo passwd newuser
sudo usermod -aG sudo newuser  # add user to sudo group
 ```

- Group management:
 ```bash
sudo groupadd developers
sudo usermod -aG developers newuser
 ```

- File permissions:
 ```bash
chmod 755 file.txt      # change file permissions
chown user:group file.txt  # change file owner and group
chgrp group file.txt    # change file group
 ```

---

## 2. System Administration

- Manage services:
 ```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx
 ```
- View logs:
 ```bash
journalctl -xe
tail -f /var/log/syslog
 ```
- Monitor system resources:
 ```bash
df -h      # disk usage
du -sh *   # folder sizes
free -h    # memory usage
 ```

---

## 3. Networking

- Check IP and network configuration:
 ```bash
ip a
ifconfig
ping google.com
netstat -tuln
 ```
- SSH access and file transfer:
 ```bash
ssh user@server
scp file.txt user@server:/destination/path/
rsync -av file.txt user@server:/destination/path/
 ```

---

## 4. Software and Updates

- Update package lists:
 ```bash
sudo apt update
 ```
- Upgrade all installed packages:
 ```bash
sudo apt upgrade
 ```
- Install a specific package:
 ```bash
sudo apt install <package>
 ```

- Automate updates with cron:
 ```bash
crontab -e
# Example: update every day at 3 AM
0 3 * * * sudo apt update && sudo apt upgrade -y
 ```

---

## 5. Security

- Firewall configuration:
 ```bash
sudo ufw enable
sudo ufw allow 22/tcp
sudo ufw status
 ```
- Managing sudo privileges and users:
 ```bash
sudo visudo
 ```
- Monitor system and perform backups:
 ```bash
rsync -av /important/data /backup/location
 ```

---

## 6. Monitoring and Troubleshooting

- Check running processes:
 ```bash
ps aux
top
htop
 ```
- Disk usage monitoring:
 ```bash
df -h
du -sh *
 ```
- Log analysis:
 ```bash
tail -f /var/log/syslog
journalctl -xe
 ```

---

This document covers essential tasks to administer Linux servers. Mastering these topics helps ensure your servers are secure, stable, and well-maintained.