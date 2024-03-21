using Service as service from '../../srv/service';

annotate service.Books with
@(
    UI          : {
        SelectionFields: [
            title,
            pages
        ],
        LineItem       : [
            {Value: title},
            {Value: pages},
            {Value: to_author.name}
        ],
    },
    Capabilities: {
        InsertRestrictions: {Insertable: true},
        UpdateRestrictions: {Updatable: true},
        DeleteRestrictions: {Deletable: true}
    },

) {
    title @(title: 'Title');
    pages @(title: 'Pages');
};

annotate service.Authors with
@(
    UI       : {
        SelectionFields: [name],
        LineItem       : [{Value: name}],
    },
    UI.Facets: [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Books of Author',
        Target: 'to_books/@UI.LineItem'
    }]
) {
    name @(title: 'Name');
};
