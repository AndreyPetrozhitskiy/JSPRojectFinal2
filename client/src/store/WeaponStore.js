import {makeAutoObservable} from 'mobx'

export default class WeaponStore {
    constructor() {
        this._types = []
        this._brands = []
        this._weapons = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setWeapons(weapons) {
        this._weapons = weapons
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get weapons() {
        return this._weapons
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}