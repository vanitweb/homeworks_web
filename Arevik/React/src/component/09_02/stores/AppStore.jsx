import {extendObservable} from 'mobx';

class AppStore {
	
	storeValues = {
		_searchvalue: '',
		_taskList: [],
		_newTaskName: '',
		_newTaskStartDate: '',
		_newTaskEndDate: ''
	}
	
	constructor() {
		extendObservable(this, this.storeValues);
	}
	
	set searchvalue(searchvalue) {
		this._searchvalue = searchvalue;
	}
	get searchvalue() {
		return this._searchvalue;
	}
	
	
	set taskList(taskList) {
		this._taskList = taskList;
	}
	get taskList() {
		return this._taskList;
	}
	
	
	
	set newTaskName(newTaskName) {
		this._newTaskName = newTaskName;
	}
	get newTaskName() {
		return this._newTaskName;
	}
	
	
	
	set newTaskStartDate(newTaskStartDate) {
		this._newTaskStartDate = newTaskStartDate;
	}
	get newTaskStartDate() {
		return this._newTaskStartDate;
	}
	
	
	
	set newTaskEndDate(newTaskEndDate) {
		this._newTaskEndDate = newTaskEndDate;
	}
	get newTaskEndDate() {
		return this._newTaskEndDate;
	}
	
	
}
export {AppStore};