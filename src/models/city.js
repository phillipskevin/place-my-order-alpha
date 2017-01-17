import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const City = DefineMap.extend({
  seal: false
}, {
  'name': '*'
});

City.List = DefineList.extend({
  '*': City
});

export const cityConnection = superMap({
  url: '/api/cities',
  idProp: 'name',
  Map: City,
  List: City.List,
  name: 'city'
});

tag('city-model', cityConnection);

export default City;
