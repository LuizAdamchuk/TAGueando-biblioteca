import axios from 'axios';
import { api } from '../services/api';
const addDataBAse = async parsedData => {
  await api.post('/books', parsedData);
};

export const getDataFromGoogleBooksApi = (isbnNumber, id) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
    .then(data => {
      if (data.data.totalItems === 0) {
        return alert(`Livro não encontrado, desculpe!`);
      } else {
        if (data.data.items[0].volumeInfo.publishedDate < 2000) {
          return alert(
            `O sistema não permite a criação de livros anteriores a 2000.`,
          );
        } else {
          const parsedData = {
            title: data.data.items[0].volumeInfo.title
              ? data.data.items[0].volumeInfo.title.toString()
              : 'Título não encontrado',
            author: data.data.items[0].volumeInfo.authors
              ? data.data.items[0].volumeInfo.authors.toString()
              : 'Autor não encontrado',
            pageCount: data.data.items[0].volumeInfo.pageCount
              ? Number(data.data.items[0].volumeInfo.pageCount)
              : 0,
            isbn: isbnNumber,
            description: data.data.items[0].searchInfo.textSnippet
              ? data.data.items[0].searchInfo.textSnippet.toString()
              : 'Sem acesso a descrição',
            publishedDate: data.data.items[0].volumeInfo.publishedDate
              ? data.data.items[0].volumeInfo.publishedDate.toString()
              : 2000,
            publisher: 'Editora não encontrada',
            userId: id,
          };
          addDataBAse(parsedData);
          return alert(`Cadastro do livro efetuado com sucesso`);
        }
      }
    });
};
