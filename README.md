# BackArchitecture
Criando Api com Arquitetura Clean code, SOLID e TDD

## O que é SOLID?
SOLID é um acrônimo criado por Michael Feathers, após observar que cinco princípios da orientação a objetos e design de código — Criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD — poderiam se encaixar nesta palavra.
## S.O.L.I.D: Os 5 princípios da POO
- S — <b>Single Responsiblity Principle</b> (Princípio da responsabilidade única)
- O — <b>Open-Closed Principle</b> (Princípio Aberto-Fechado)
- L — <b>Liskov Substitution Principle</b> (Princípio da substituição de Liskov)
- I — <b>Interface Segregation Principle</b> (Princípio da Segregação da Interface)
- D — <b>Dependency Inversion Principle</b> (Princípio da inversão da dependência)

<hr />

## O que é TDD

- Primeiro, escreva um teste unitário que inicialmente irá falhar, tendo em vista que o código ainda não foi implementado;
- Crie o código que satisfaça esse teste, ou seja: implemente a funcionalidade em questão. Essa primeira implementação deverá satisfazer imediatamente o teste que foi escrito no ciclo anterior;
- Quando o código estiver implementado e o teste satisfeito, refatore o código para melhorar pontos como legibilidade. Logo após, execute o teste novamente. A nova versão do código também deverá passar sem que seja necessário modificar o teste escrito inicialmente.

![img-tdd](https://user-images.githubusercontent.com/55901431/101355594-8d6d1f00-3875-11eb-96e5-6c14ec115d59.png)

- Red: escreva um pequeno teste automatizado que, ao ser executado, irá falhar;
- Green: implemente um código que seja suficiente para ser aprovado no teste recém-escrito;
- Refactor: refatore o código, a fim dele ser melhorado, deixando-o mais funcional e mais limpo.
