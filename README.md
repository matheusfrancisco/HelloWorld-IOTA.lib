
## Universidade Federal de Santa Catarina
### Professora: Analúcia Schiaffino
### Aluno: Matheus Francisco B. Machado



### Apresentação de Trabalho

#### Tema: Implementação utilizando IOTA.lib.js


### Getting Started 

Usando a biblioteca em si é realmente muito simples. Existe uma documentação completa que você pode ler para saber exatamente qual funcionalidade está disponível para você.

#### How to get the library

![Link da biblioteca IOTA.lib.js](https://github.com/iotaledger/iota.lib.js)


##### npm/nodejs

`npm install iota.lib.js`


#### O que é a IOTA?

Primeiro de tudo, tecnicamente falando, ao contrário do Bitcoin, Ethereum ou Hyperledger, não é uma solução baseada em blockchain, porque as transações não exigem blocos a serem formados nem criam uma única cadeia de blocos. Em vez disso, cada transação é um nó separado no gráfico de transações em forma de árvore. Cada transação faz referência a duas transações anteriores que existem na árvore, confirmando sua validade (verificando sua prova de trabalho). Esse gráfico direcionado em forma de árvore no IOTA é chamado de Emaranhado.

Dessa forma, pelo menos teoricamente, todo o sistema é auto-validado e o processo de aprovação é dissociado de qualquer autoridade e descentralizado. É também uma maneira de se livrar das taxas de transação - todos os nós participantes da rede têm o incentivo de verificar a prova de funcionamento de outras transações, porque ela é necessária para enviar transações próprias para a rede.

A escalabilidade, a próxima grande promessa da IOTA, é teoricamente garantida pelo fato de que não é necessário que o nó conheça o estado de toda a árvore Tangle - a árvore pode crescer de forma assíncrona em várias direções. A suposição é que as filiais separadas serão eventualmente “entrelaçadas” juntas e validadas de forma cruzada pelas transações futuras. Essa ideia permite que os nós funcionem em um estado não totalmente sincronizado - isso é especialmente útil no contexto de dispositivos de IoT que podem estar offline por vários motivos.



#### O que precisa para realizar esse tutorial.
##### Instalações nescessarias.
###### Nodejs/Npm

* Instalação para windows
> https://www.youtube.com/watch?v=brSwmLQA0iA
> https://www.youtube.com/watch?v=l5B4yUr87uo

* Instalação para o linux
> https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-no-ubuntu-16-04-pt
> https://www.edivaldobrito.com.br/node-js-no-linux/
> https://nodejs.org/es/download/package-manager/


* Instalar express e handlebars e iota.lib.js
`npm install express-handlebars`

`npm install express`

`npm install iota.lib.js`

