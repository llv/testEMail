﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var xhr=new XMLHttpRequest(); 
	        //Create an empty FormData object
	    var formdata=new FormData(); 
	        //Fill the formdata object using the mail datasource values
	    formdata.append('From',mail.From) 
	    formdata.append('To',mail.To)
	    formdata.append('Password',mail.Password)
	    formdata.append('Title',mail.Title)
	    formdata.append('Content',mail.Content);
	 
	        //Add a listener to read the response of the handler (server side)
	    xhr.addEventListener("load", function (evt) {
	        switch(evt.target.responseText){
	            case 'true' :
	                $$('message').setValue('Your message has been sent');
	                $$('message').$domNode.css({
	                    color : 'green'
	                });
	                break;
	        //If the sendMail function response is true, 
	        //then a green message will be displayed in the 
	        //message dialog
	 
	            case 'false' :
	                $$('message').setValue('Your message has not been sent');
	                $$('message').$domNode.css({
	                    color : 'red'
	                });
	                break;
	        //If the sendMail function response is false,
	        //then a red message will be displayed on the message
	        //dialog
	        }
	        $$('dialog1').displayDialog();
	    }, false); 
	 
	    xhr.open('POST','/sendMail',true); //call the sendMail handler
	    xhr.send(formdata); //Send the formdata object to the handler on the server
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
