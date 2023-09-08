
# Mime-type

Obtenha a assinatura de arquivos e suas respectivas informações de forma simples e fácil. 



## Funcionalidades

- Identificar arquivo pelo **magic byte**
- Identificar arquivo pela **extensão**
- Assinaturas suportadas **[list_of_file_signatures](https://en.wikipedia.org/wiki/List_of_file_signatures)**



## Documentação

#### getAssignment(file: string): IAssignmentsChild | boolean
Converte o argumento `file` para hexadecimal e então verifica se alguma das assinaturas presentes em `assignments` está presente.

Quando existente retorna a seguinte estrutura:
```json
{
    "extension": "string",
    "content-type": "string"
}
```
Caso não seja encontrado uma assinatura registrada para o arquivo será retornado apenas `false`.

#### getAssignmentByExtension(extension: string): IAssignmentsChild | boolean
Verifica se a extensão recebida existe em `assignments`.

Quando existente retorna a seguinte estrutura:
```json
{
    "extension": "string",
    "content-type": "string"
}
```
Caso não seja encontrado uma extensão registrada será retornado apenas `false`.
## Uso/Exemplos

#### Importando

```typescript
// Importando o mime. Coloque o diretório onde se encontra.
import mime from "..";

// Para importar os tipos. O único tipo que provavelmente será usado será este.
import { IAssignmentsChild } from "../interfaces/IAssignments";
```
#### getAssignment(file: string): IAssignmentsChild | boolean
```typescript
const mimeInstance = mime();
// Image em base64(jpg). 
const image: string = "/9j/4A...";

// Obtendo as informações do arquivo.
const fileData: IAssignmentsChild = mime.getAssignment(atob(image));

// Exibindo as informações obtidas.
console.log(fileData);
```
Com isso, você deve ter em seu console isto:
```json
{
    "extension": "jpg",
    "content-type": "image/jpeg"
}
```

#### getAssignmentByExtension(extension: string): IAssignmentsChild | boolean
```typescript
const mimeInstance = mime();

// Obtendo as informações do arquivo.
const fileData: IAssignmentsChild = mime.getAssignmentByExtension("jpg");

// Exibindo as informações obtidas.
console.log(fileData);
```
Com isso, você deve ter em seu console isto:
```json
{
    "extension": "jpg",
    "content-type": "image/jpeg"
}
```
