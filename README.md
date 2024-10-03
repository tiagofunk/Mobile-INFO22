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

**ATENÇÃO:** Atualmente o comando de criação do projeto esta usando a versão 51 do expo, o que altera a organização dos arquivos do projeto. É necessário fazer um downgrade para usar o expo na versão 50.

## Downgrade para expo versão 50

Execute o seguinte comando no terminal:

    npm install expo@50.x

Esse comando faz o downgrade para a versão 50 do expo. No entanto é necessário corrigir as dependencias, que pode ser feito com o seguinte comando:

    npx expo install --fix

Depois é necessário criar o arquivo `App.js`.

Também é necesário atualizar o arquivo `package.json` para que contenha a seguinte linha (**Você deve atualizar a linha, não adicionar**):

    "main": "node_modules/expo/AppEntry.js",

Aqui você pode executar o projeto, só que pode ocorrer um erro de versão incompatível no aplicativo no dispositivo fisico. No próprio aplicativo vai aparecer um link para baixar um apk para usar com a versão 50.

Baixe o apk, forneça a permissão para executar e instale. Pode ser necessário desinstalar o Expo Go para instalar pelo apk.

No emulador deve funcionar normalmente, independete da versão do expo go.

## Dependências para navegação entre telas

É necessário instalar as seguintes dependências:

    npm install @react-navigation/native @react-navigation/native-stack

E depois, como já estamos utilizando o expo, basta instalar as seguintes depedências:

    npx expo install react-native-screens react-native-safe-area-context

Para mais detalhes, clique [Aqui](https://reactnative.dev/docs/navigation#installation-and-setup).

## Dependências para salvar dados localmente

    npm install sync-storage

## Dependências para geolocalização

Biblioteca de geolocalização

    npx expo install @react-native-community/geolocation

Biblioteca para envio de requisições HTTP:

    npm install axios

Biblioteca de dependência do plugin:

    npm install expo-location expo-task-manager

Ainda é necessário ajustar o arquivo `app.json`

    "plugins": [
      ...,
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ],

# Conexão do emulador com internet

Para que o que emulador android possa se conectar à internet, é necessário alterar o DNS primário do computador para os seguinte valor:

        8.8.8.8

É necessário alterar o DNS secundário do computador para o seguinte valor:

        8.8.8.4

# Executar projeto

## Executar projeto no computador e celular (Android e IOS)

**É necessário que o computador e o celular estejam na mesma rede Wi-fi.**

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