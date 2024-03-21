sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'books/test/integration/FirstJourney',
		'books/test/integration/pages/BooksMain'
    ],
    function(JourneyRunner, opaJourney, BooksMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('books') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksMain: BooksMain
                }
            },
            opaJourney.run
        );
    }
);