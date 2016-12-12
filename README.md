# IonicBootcamp

/*	
	Para rodar a aplicação, entrar na pasta do projeto e digitar:
	ionic serve
*/

#Passo 1: -- na pasta da aplicação
	ionic start RssReader blank --v2

#Passo 2: -- criando provider
	ionic g provider RssService

Após criar o provider implementar a classe

Alterar a Home.ts para ver o arquivo de start ups

Alterar a Home.html para mostrar o arquivo de start up

Não esquecer de alterar os imports dentro de src/app/app.modules.ts
	- sendo que quando é provider é só adicionar o import e adicionar no array
	- quando é pagetem que adicionar o import e no entrycomponents e no declarations
	- quando é pipes deve colocar apenas no declaration



#Passo 3: -- criando outra pagina
	ionic g page outra

#Passo 4: -- criando pipe // serve para limpar o html, algo que deve se chamado a parte
	ionic g pipe SanitizeHTML

