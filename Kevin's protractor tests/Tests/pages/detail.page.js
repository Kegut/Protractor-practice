module.exports = function(){
	this.heroName = element(by.css('app-hero-detail div h2'))
	this.editNameField = element(by.tagName('input'));
	this.saveButton = element(by.buttonText('save'));
	this.goBackButton = element(by.buttonText('go back'));

	this.getHeroName = function(){
    	return this.heroName.getText();
    }

    this.setName = function(name){
    	this.editNameField.clear();
    	this.editNameField.sendKeys(name);
    }
}