import {services} from 'Src/services/service';
import {appConfig} from 'Src/constant';

export function login(params) {
    return services.create({...params, API: appConfig.API + '/login'});
}
export function signup(params) {
    return services.create({...params, API: appConfig.API + '/signup'});
}
export function getProfile(params) {
    return services.get({...params, API: appConfig.API + '/get_user_id'});
}

