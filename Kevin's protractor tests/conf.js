
exports.config = {
    framework:'jasmine',
    seleniumAddress:"http://localhost:4444/wd/hub",
    //specs:['./**/*.spec.js'],
   	
   	suites:{
   		all: "./**/*.spec.js",
   		top: "./**/choose.top.heroes.spec.js",
   		search:"./**/search.heroes.spec.js",
   		heroes:"./**/heroes.list.spec.js",
   	},

    onPrepare: function(){
      browser.driver.manage().window().setPosition(0,0);
      browser.driver.manage().window().setSize(1600,900);
  }
    
    
}