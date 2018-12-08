module.exports = function(){
	this.heroesLink = element(by.linkText('Heroes'));
    this.narcoButton = element(by.css('a[href="/detail/12"]'));
    this.bombastoButton = element(by.css('a[href="/detail/13"]'));
    this.celeButton = element(by.css('a[href="/detail/14"]'));
    this.magneButton = element(by.css('a[href="/detail/15"]'));
    this.searchHero = element(by.id('search-box'));
    //this.searchResult = element(by.tag(''));
    this.clearButton = element(by.buttonText('clear'));
    //this.messageHistory = element(by.)


    this.setSearch = function(name){
    	this.searchHero.sendKeys(name);

    	this.searchResult = element(by.partialLinkText(name));
    	browser.waitForAngular();
    	this.searchResult.click();
  	    	
    }

    
}	
