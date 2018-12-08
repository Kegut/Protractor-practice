var indexPage = require('./pages/index.page.js');
var detailPage = require('./pages/detail.page.js');

describe('Searching heroes', function(){
	var index = new indexPage(), detailP = new detailPage();
    

    beforeEach(function(){

        browser.get('http://localhost:4200/dashboard');
        heroeslink = index.heroesLink;
        heroTitle = detailP.heroName;
        searchBox = index.searchHero;    	    
    });

    it('Should display the hero details',function(){
    	var heroname = "RubberMan";
    	var heroDetailName= heroname.toUpperCase() + " Details";

	    index.setSearch(heroname);
	  	browser.waitForAngular();

	    expect(detailP.getHeroName()).toEqual(heroDetailName);
    });
});