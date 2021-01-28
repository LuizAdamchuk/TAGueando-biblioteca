const mysql = require('../config/database/mysql');

exports.getbooks = async (req, res, next) => {
  try {
    let limit = 5;
    if (req.query.limit) {
      limit = parseInt(req.query.limit);
    }

    let page = 1;
    if (req.query.page) {
      page = parseInt(req.query.page);
    }
    const offset = (page - 1) * limit;

    const query = `
            SELECT *
               FROM books
               LIMIT ?
               OFFSET ?  
        `;
    const result = await mysql.execute(query, [limit, offset]);
    const response = {
      length: result.length,
      books: result.map(prod => {
        return {
          bookId: prod.bookId,
          title: prod.title,
          author: prod.author,
          pageCount: prod.pageCount,
          isbn: prod.isbn,
          description: prod.description,
          publishedDate: prod.publishedDate,
          publisher: prod.publisher,
        };
      }),
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.postbook = async (req, res, next) => {
  try {
    if (Number(req.body.publishedDate) < 2000) {
      return res.status(500).send({
        error: 'O sistema não permite a criação de livros anteriores a 2000.',
      });
    }

    const queryConfirm = 'SELECT * FROM books WHERE userId = ? AND isbn = ?;';
    const resultConfirm = await mysql.execute(queryConfirm, [
      req.body.userId,
      req.body.isbn,
    ]);
    if (!resultConfirm.length) {
      const query =
        'INSERT INTO books (title, author, pageCount, isbn, description, publishedDate, publisher,userId) VALUES (?,?,?,?,?,?,?,?)';
      const result = await mysql.execute(query, [
        req.body.title,
        req.body.author,
        req.body.pageCount,
        req.body.isbn,
        req.body.description,
        req.body.publishedDate,
        req.body.publisher,
        req.body.userId,
      ]);

      const response = {
        message: 'Produto inserido com sucesso',
        createdbook: {
          bookId: result.insertId,
          title: req.body.title,
          author: req.body.author,
          pageCount: req.body.pageCount,
          isbn: req.body.isbn,
          description: req.body.description,
          publishedDate: req.body.publishedDate,
          publisher: req.body.publisher,
        },
      };
      return res.status(201).send(response);
    }
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.getOneBook = async (req, res, next) => {
  try {
    console.log(req.params.bookId);
    const query = 'SELECT * FROM books WHERE bookId = ?;';
    const result = await mysql.execute(query, [req.params.bookId]);

    if (result.length == 0) {
      return res.status(404).send({
        message: 'Não foi encontrado produto com este ID',
      });
    }
    const response = {
      length: result.length,
      books: result.map(prod => {
        return {
          bookId: prod.bookId,
          title: prod.title,
          author: prod.author,
          pageCount: prod.pageCount,
          isbn: prod.isbn,
          description: prod.description,
          publishedDate: prod.publishedDate,
          publisher: prod.publisher,
        };
      }),
    };

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.updatebook = async (req, res, next) => {
  try {
    const query = ` UPDATE books
                           SET title         = ?,
                               author        = ?,
                               pageCount        = ?,
                               isbn        = ?,
                               description        = ?,
                               publishedDate        = ?,
                               publisher        = ?
                         WHERE bookId    = ?`;
    await mysql.execute(query, [
      req.body.title,
      req.body.author,
      req.body.pageCount,
      req.body.isbn,
      req.body.description,
      req.body.publishedDate,
      req.body.publisher,
      req.params.bookId,
    ]);
    const response = {
      message: 'Produto atualizado com sucesso',
      upatedbook: {
        bookId: req.params.bookId,
        title: req.body.title,
        author: req.body.author,
        pageCount: req.body.pageCount,
        isbn: req.body.isbn,
        description: req.body.description,
        publishedDate: req.body.publishedDate,
        publisher: req.body.publisher,
      },
    };
    return res.status(202).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.deletebook = async (req, res, next) => {
  try {
    const query = `DELETE FROM books WHERE bookId = ?`;
    await mysql.execute(query, [req.params.bookId]);

    const response = {
      message: 'Produto removido com sucesso',
    };
    return res.status(202).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
