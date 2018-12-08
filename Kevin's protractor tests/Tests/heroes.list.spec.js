var indexPage = require('./pages/index.page.js');
var detailPage = require('./pages/detail.page.js');
var heroesPage = require('./pages/heroes.list.page.js');

describe('Test heroes list page',function(){
	var index= new indexPage(), detailP = new detailPage(),
	heroesP = new heroesPage();

	beforeEach(function(){

        browser.get('http://localhost:4200/dashboard');
        heroeslink = index.heroesLink;
    	heroTitle = detailP.heroName;
    	addHeroButton = heroesP.addHeroButton;
    	heroeslink.click();
    	browser.waitForAngular();

    });

    describe('Adding a new Hero',function(){
    	it('Should display in the list',function(){
    		var newHero =  "Alpin";
    		heroesP.addNewHero(newHero);
    		addHeroButton.click();

    		expect(heroesP.heroAdded(newHero)).toContain(newHero);

    	});
    });

});