import crudService from './crudService';

export default class patientService extends crudService {
    findPatients(query) {
        return this.getResources(`/openmrs/ws/rest/v1/patient?q=${query}`);
    }


    getPatient(uuid) {
        return this.getResource('/openmrs/ws/rest/v1/patient/', uuid);
    }
}
