# openmrs-owa-vue-boilerplate
<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

## About
* This is a boilerplate for creating Vue Open Web Apps in OpenMRS. My react-redux boilerplate project
is [here](https://github.com/dermatologist/openmrs-owa-react-boilerplate)

* Created using vue cli 3

## How to Use
* Update *public/manifest.webapp*
* rename *deploy-example.sh* to *deploy.sh* and add openmrs server details. You can use scp here to deploy on server.  This copies the dist folder over to the owa folder on server except the manifest.webapp file. Hence, deploy it the conventional way for the first time as zip file so that manifest.webapp can be updated by openmrs or manually create the manifest.webapp file. 
* See *src/services/patientServices.js* to see how to access openmrs resources. Use *baseURL: ContextService.getManifest().openmrs.href* if required.
* See *src/components/HelloPatient.vue* to see how it all fits together.
* see *vue.config.js* for additional configurations if required.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## Deploy to Openmrs Server
```
yarn run deploy
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```
