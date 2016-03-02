## Arun Varghese

## App Url: [http://av.meteorapp.com](http://av.meteorapp.com)

## Mongo Hosting: MongoLab.com

###### Packages:
```
accounts-base                    1.2.2  
accounts-password                1.1.4  
aslagle:reactive-table           0.8.25*
autopublish                      1.0.4  
benjaminrh:jquery-cookie         0.1.0  
blaze-html-templates             1.0.1  
chrisbutler:typed.js             1.1.1  
dbernhard:jquery-ui-draggable    0.1.2  
ecmascript                       0.1.6* 
es5-shim                         4.1.14 
fortawesome:fontawesome          4.5.0  
fourseven:scss                   3.4.1  
harrison:papa-parse              1.1.1  
iamkevingreen:mixitup            2.1.7  
insecure                         1.0.4  
iron:router                      1.0.12 
jquery                           1.11.4 
keiths:octicons                  1.2.2  
meteor-base                      1.0.1  
mobile-experience                1.0.1  
momentjs:moment                  2.11.2 
mongo                            1.1.3  
mrt:jquery-easing                1.3.0  
mrt:modernizr-meteor             2.6.2  
natestrauser:animate-css         3.4.0* 
noorderstorm:stellar             0.1.0  
pagebakers:ionicons              2.0.1_1
pfafman:filesaver                0.2.2  
richsilv:owl-carousel            0.1.0  
session                          1.1.1  
standard-minifiers               1.0.2  
themeteorchef:jquery-validation  1.14.0 
timmyg:wow                       1.0.1  
tracker                          1.0.9  
twbs:bootstrap                   3.3.6  
```

###### How to deploy:

- Create settings.json file under the server directory
- Add the following entry:
```
{ 
	"galaxy.meteor.com": { 
		"env": { 
			"MONGO_URL": "", 
			"MONGO_OPLOG_URL": "" 
		} 
	}
}
```
- Replace MONGO_URL value with ```mongodb://<username>:<password>@<host>:<port>/<database>```, where username/password/host/port/database can be retrieved from whatever hosting service you are using, in my case, MongoLab

- Run the deploy command: ```DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy <host> --settings <settings.json>```



