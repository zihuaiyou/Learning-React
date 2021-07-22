/* 
   创建Action对象
*/

import {ADDPERSON} from '../constant';
export default function addPersonAction(personObj){
    return {type:ADDPERSON,data:personObj};
}
