using {db} from '../db/schema';

service Service {
    entity Books   as projection on db.Books
    entity Authors as projection on db.Authors;
}
