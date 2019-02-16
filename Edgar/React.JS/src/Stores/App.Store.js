import {extendObservable} from 'mobx';

class AppStore {
	storeValues ={
		_searchValue: '',
		_taskList: []
	};

	constructor(){
		extendObservable(this, this.storeValues);
	}

	set searchValues(value){
		this._searchValue = value;
	}

	get searchValues(){
		return this._searchValue;
	}
}
export {AppStore};