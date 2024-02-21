# Mobile-INFO22

# Instalação dos softwares

## Visual Studio Code

Baixe o Visual Studio Code [aqui](https://code.visualstudio.com/download)

## NodeJS

Baixe o NodeJS [aqui](https://nodejs.org/en).

Quando terminar a instalação, abra o VS Code (ou reinicie), abra o terminal e digite:

    node -v

# Configurações

Para pode criar um projeto é necessário instalar a seguinte depedência:

    npm install -g npx


# Criar projeto

Comando para criar o projeto:

    npx create-expo-app <nome-do-projeto>

# Executar projeto

## Executar projeto no computador e celular (Android e IOS)

É necessário que o computador e o celular estejam na mesma rede Wi-fi.

Abra o terminal, navegue até a pasta do projeto (usando o comando `cd`) e digite o seguinte comando:

    npx expo start

Vai aparecer um QRcode na tela (depois de alguns segundos), abra o aplicato **expo** no seu celular e escaneie o QRcode.

## Executar o projeto em emulador

Nesse caso, é necessário instalar o **android studio** no computador e é necessário configurar e iniciar o emulador por ele.

Abra o terminal, navegue até a pasta do projeto (usando o comando `cd`) e digite:

    npm run android

## Executar o projeto em modo WEB (usar em casos de necessidade)

Instale as seguintes depedências:

    npx expo install react-native-web react-dom @expo/metro-runtime

Para executar, abra o terminal, navegue até a pasta do projeto (usando o comando `cd`) digite:

    npm run web