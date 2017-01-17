import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const State = DefineMap.extend({
  seal: false
}, {
  'short': '*'
});

State.List = DefineList.extend({
  '*': State
});

export const stateConnection = superMap({
  url: '/api/states',
  idProp: 'short',
  Map: State,
  List: State.List,
  name: 'state'
});

tag('state-model', stateConnection);

export default State;
