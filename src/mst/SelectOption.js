import {types} from 'mobx-state-tree';

const SelectOption = types.model({
    title: types.string,
    value: types.string
}).actions(self => ({}));

export default SelectOption;