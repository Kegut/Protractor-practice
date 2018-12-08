module.exports = function(){
	this.addHeroField = element(by.tagName('input'));
	this.addHeroButton = element(by.buttonText('add'));

	this.addNewHero = function(name){
    	this.addHeroField.clear();
    	this.addHeroField.sendKeys(name);
	}

	this.heroAdded = function(name){
    	this.heroAdded = element(by.partialLinkText(name));
    	return this.heroAdded.getText();
	}
}