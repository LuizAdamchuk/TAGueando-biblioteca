
![create-account](https://media.giphy.com/media/ZEBbUi3PwTnLDAWwj1/giphy.gif)
![create-account](https://media.giphy.com/media/arkPMaQtbmOnp86Rxz/giphy.gif)
 
## Features
- Register books of your library using your smartphone.

## Installation

You need to install Node.js, Yarn and for mobile Expo

## Starting

**0º cd created-folder**

```jsx
git clone https://github.com/LuizAdamchuk/TAGueando-biblioteca.git

```
Config your Database in  Server>SRC>Config>database
```jsx
docker run -p 3306:3306 --name mysql-maridb -e MYSQL_ROOT_PASSWORD=tag@123 -d mariadb

```
**1º cd server**

```jsx
yarn install

```
```jsx
yarn start

```
**2º cd mobile**

```jsx
yarn install

```
```jsx
expo start

```


## Techs

- Javascript
- mysql
- jsonwebtoken
- express
- bcrypt
- morgan
- formik
- axios
- expo-barcode-scanner
- expo-camera
