import SetImage from  "../../components/SetImage"

export default function BookCard({book}){
  return(
    <div className="book-card">
      <SetImage imgSrc={book.img} pt="100%" alt={book.title} />
      <div className="book-info">
        <img className="author-img" src={book.authorImg} alt="author" />
        <p className="book-title">{book.title}</p>
        <p className="book-desc">Στο μαγικό κόσμο του [Τίτλος Βιβλίου], οι αναγνώστες ταξιδεύουν σε ένα συναρπαστικό ταξίδι γεμάτο μυστήριο, αγωνία και συγκινητικές στιγμές. Καθώς η αφήγηση εξελίσσεται, [Όνομα Κεντρικού Χαρακτήρα], ένας [περιγραφή χαρακτήρα], βρίσκεται αντιμέτωπος με μια [κεντρική σύγκρουση ή πρόκληση].</p>
        <a className="book-link" href="#!">View Book</a>
      </div>
    </div>
  )
}
