## Arun Varghese
## App Url: [http://av.meteorapp.com](http://av.meteorapp.com)
## Heroku PaaS: [https://avarghese.herokuapp.com](https://avarghese.herokuapp.com)
## Analytics: [https://galaxy.meteor.com](https://galaxy.meteor.com)
## Mongo Hosting: [MongoLab.com](https://MongoLab.com)

###### Deploy to Galaxy:

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
- Replace MONGO_URI value with ```mongodb://<username>:<password>@<host>:<port>/<database>```, where username/password/host/port/database can be retrieved from whatever hosting service you are using, in my case, MongoLab

- Run the deploy command: ```DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy <host> --settings <settings.json>```

###### SSL 
- Add ssl package from app directory ```meteor add force-ssl```
- Generate key: ```openssl genrsa -out av.meteorapp.com.key 2048```
- Generate certificate signing request (CSR) from server: ```openssl req -new -sha256 -key av.meteorapp.com.key -out mav.meteorapp.com.csr```
- Obtain CRT file and create PEM: ```openssl x509 -inform der -in av.meteorapp.com.crt -out av.meteorapp.com.crt.pem```
- Concatenate key and PEM
- In Progress...

###### Deploy to Heroku:
- Install Heroku toolbelt: [https://toolbelt.heroku.com/](https://toolbelt.heroku.com/)
- Go to project directory and run the following commands:
 ```heroku login ;
heroku apps:create <name-of-app>```
- Add meteor build pack to Heroku: `heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git`
- Add Mongo URI and App Url as configs to Heroku: 
 ```heroku config:add MONGO_URL=<MONGOLAB_URI value> ;
heroku config:add ROOT_URL=https://<app-name>.herokuapp.com```
- Check Heroku remotes for Heroku .git files: `git remote -v`
- Push project to Heroku: `git push heroku master`
- View at `https://<app-name>.herokuapp.com`


###### Packages:
```
accounts-base                    1.2.2  
accounts-password                1.1.4  
alanning:roles                   1.2.15 
aslagle:reactive-table           0.8.25*
benjaminrh:jquery-cookie         0.1.0  
blaze-html-templates             1.0.1  
chrisbutler:typed.js             1.1.1  
dbernhard:jquery-ui-draggable    0.1.2  
ecmascript                       0.1.6* 
es5-shim                         4.1.14 
fortawesome:fontawesome          4.5.0  
fourseven:scss                   3.4.1  
harrison:papa-parse              1.1.1  
iron:router                      1.0.12 
jquery                           1.11.4 
meteor-base                      1.0.1  
meteorhacks:fast-render          2.13.0 
mobile-experience                1.0.1  
momentjs:moment                  2.11.2*
mongo                            1.1.3  
mrt:jquery-easing                1.3.0  
mrt:modernizr-meteor             2.6.2  
msavin:mongol                    1.6.2  
natestrauser:animate-css         3.4.0* 
noorderstorm:stellar             0.1.0  
pfafman:filesaver                0.2.2  
session                          1.1.1  
standard-minifiers               1.0.2  
themeteorchef:jquery-validation  1.14.0 
timmyg:wow                       1.0.1  
tracker                          1.0.9  
twbs:bootstrap                   3.3.6  
```
