class Userconnection {

    /**
     * Constructor
     * @param connectionID
     * @param connectionType
     * @param catalogCategory
     * @param response
     */
    constructor(connectionID, connectionName, connectionType, response) {
        this._connectionID = connectionID;
        this._connectionName = connectionName;
        this._connectionType = connectionType;
        this._response = response;
    }
    /**
     *
     * Getter and Setters
     */


    get itemCode() {
        return this._connectionID;
    }

    set itemCode(value) {
        this._connectionID = value;
    }

    get itemName() {
        return this._connectionName;
    }

    set itemName(value) {
        this._connectionName = value;
    }

    get catalogCategory() {
        return this._connectionType;
    }

    set catalogCategory(value) {
        this._connectionType = value;
    }

    get response() {
        return this._response;
    }

    set response(value) {
        this._response = value;
    }

    get response() {
        return this._response;
    }

}
module.exports = Userconnection;
