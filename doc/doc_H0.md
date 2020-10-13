
## Documentación del Hito 0

### Configuración de GitHub

Para comenzar se van a generar las claves de shh y se van a añadir a github. Para ello,  abrimos la consola y ejecutamos:

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Se rellenan los campos que nos piden y ya tendríamos nuestras claves publicas y privadas en el directorio ~/.shh.


```shell
cristobal@cristobal-PC:~$ ls -l .ssh/
total 12
-rw------- 1 cristobal cristobal 3326 mar  1  2020 id_rsa
-rw-r--r-- 1 cristobal cristobal  751 mar  1  2020 id_rsa.pub
-rw-r--r-- 1 cristobal cristobal 2654 oct  7 17:41 known_hosts
```
Mostramos la clave pública y la añadimos la clave al agente ssh
```shell
#Mostrar clave pública
cat id_rsa.pub

#Añadir al agente ssh
ssh-add -L
```
Copiamos la clave para añadirla a Github. En github nos vamos a configuración y pulsamos en SSH and GPG keys. Añadimos una SSH Keys, definimos un nombre identificativo y pegamos nuestra clave publica, una vez rellenado los dos campos pulsamos en add SSH key.

![SSH Key.](https://github.com/cr13/project_CC/blob/main/doc/img/h0/SSH_KEY.png "Clave SSH.")

[Ref](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

#### Personalizamos git con nuestros datos y configuramos correctamente nuestro repositorio fork

```shell

cristobal@cristobal-PC:~/Escritorio/CC/CC-20-21$ git config pull.rebase true
cristobal@cristobal-PC:~/Escritorio/CC/CC-20-21$ git config --list
user.email=cristobal111992@gmail.com
user.name=Cristóbal
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=git@github.com:cr13/CC-20-21.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
remote.upstream.url=https://github.com/JJ/CC-20-21
remote.upstream.fetch=+refs/heads/*:refs/remotes/upstream/*
pull.rebase=true

```

#### Two-factor authentication

Para finalizar vamos a habilitar la autentificación en dos factores de gitHub. Para ello, nos vamos a configuración --> seguridad de la cuenta y en "Two-factor authentication" pulsamos el botón verde "Enable Two-factor authentication".

Para ello vamos a necesitar instalar una aplicación en nuestro smartphone o tablet. Se recomienda utilziar Authy, 1Password o LastPassAuthenticator. Yo he utilizado la primera opción y he seguido los pasos indicados en el [tutorial](https://authy.com/guides/github/)



Two-factor-authentication.png

![Two-factor authentication](https://github.com/cr13/project_CC/blob/main/doc/img/h0/Two-factor-authentication.png)
