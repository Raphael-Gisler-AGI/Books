using {cuid} from '@sap/cds/common';

namespace db;

entity Books : cuid {
    title      : String;
    pages      : Integer;
    to_author : Association to one Authors;
}

entity Authors : cuid {
    name    : String;
    to_books : Association to many Books
                  on to_books.to_author = $self;
}
