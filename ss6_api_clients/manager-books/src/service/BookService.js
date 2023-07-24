import axios from "axios";
export async function getBooksList() {
  const response = await axios.get("http://localhost:8080/books");
  return response.data;
}
export async function createAddNewBook(book) {
  await axios.post("http://localhost:8080/books", book);
}
export async function editBook(book) {
  await axios.put("http://localhost:8080/books/" + book.id, book);
}
export async function deleteBook(id) {
 await axios.delete("http://localhost:8080/books/" + id);
}
