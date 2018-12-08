var indexPage = require('./pages/index.page.js');
var detailPage = require('./pages/detail.page.js');


describe('Selecting a top Hero',function(){
var index = new indexPage(), detailP = new detailPage();
var narButton, bomButton,celeButton,magneButton,clearButton,saveButton;//buttons
var heroeslink,text,heroTitle;//text


    beforeEach(function(){

        browser.get('http://localhost:4200/dashboard');
        heroeslink = index.heroesLink;
        heroTitle = detailP.heroName;
        narButton = index.narcoButton;
        //browser.waitForAngular();    
    });
      
        
        describe('When clicking Narco button',function(){
            it('Should display page with details of the hero Narco',function(){
              narButton.click();
              browser.waitForAngular();

              expect(detailP.getHeroName()).toEqual('NARCO Details');
            });

            it('Should be able to change Hero Name',function(){
                saveButton = detailP.saveButton;
                var newName = "Marco";
                narButton.click();
                browser.waitForAngular();

                detailP.setName(newName);
                saveButton.click();
                browser.waitForAngular();
                expect(narButton.getText()).toEqual(newName);

            });

        });

        describe('When clicking Bombasto button',function(){
            it('Should display page with details of the hero Bombasto',function(){
              bomButton = index.bombastoButton;
              bomButton.click();
              browser.waitForAngular();
              expect(detailP.getHeroName()).toEqual('BOMBASTO Details');
                
            });
        });

        describe('When clicking Celeritas button',function(){
            it('Should display page with details of the hero Celeritas',function(){
              celeButton = index.celeButton;
              celeButton.click();
              browser.waitForAngular();
              expect(detailP.getHeroName()).toEqual('CELERITAS Details');
                
            });
        });

        describe('When clicking Magneta button',function(){
            it('Should display page with details of the hero Magneta',function(){
              magneButton = index.magneButton;
              magneButton.click();
              browser.waitForAngular();
              expect(detailP.getHeroName()).toEqual('MAGNETA Details');
                
            });
        });  

});